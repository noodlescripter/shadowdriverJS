const axios = require("axios")
const { _conf } = require("../configParser/configParser")
const { _caps } = require("../browserManager/getCaps")
const path = require("path")
const fs = require("fs")
const os = require("os")
const { deleteFile } = require("../cleanup-engine/cleanup-engine")
const { unzipAndRename } = require("../utils/unzip")

function get_browser_information() {
  const to_be_downloaded = {
    browserName: null,
    version: null,
  }

  // Get configuration object
  const conf_file = _conf("./shadow.conf.js") // Assuming _conf is defined elsewhere
  const cap_from_conf = _caps(conf_file) // Assuming _caps is defined elsewhere

  if (cap_from_conf) {
    console.log(
      "Got the capabilities from the configuration file:",
      cap_from_conf
    )

    // Correctly assign values to the `to_be_downloaded` object
    if (cap_from_conf.browserName && cap_from_conf.version) {
      to_be_downloaded.browserName = cap_from_conf.browserName
      to_be_downloaded.version = cap_from_conf.version
    }
  }

  return to_be_downloaded
}

async function get_download_url() {
  const { browserName, version } = get_browser_information()
  console.log("browserName:", browserName, "Version:", version)

  if (
    browserName?.toLowerCase() === "chrome" &&
    version?.toLowerCase() !== "latest"
  ) {
    return {
      chrome_mac: `https://storage.googleapis.com/chrome-for-testing-public/${version}/mac-arm64/chrome-mac-arm64.zip`,
      chrome_windows: `https://storage.googleapis.com/chrome-for-testing-public/${version}/win64/chrome-win64.zip`,
      chrome_linux: `https://storage.googleapis.com/chrome-for-testing-public/${version}/linux64/chrome-linux64.zip`,
      chromedriver_mac: `https://storage.googleapis.com/chrome-for-testing-public/${version}/mac-arm64/chromedriver-mac-arm64.zip`,
      chromedriver_windows: `https://storage.googleapis.com/chrome-for-testing-public/${version}/win64/chromedriver-win64.zip`,
      chromedriver_linux: `https://storage.googleapis.com/chrome-for-testing-public/${version}/linux64/chromedriver-linux64.zip`,
    }
  }

  throw new Error("Unsupported browser or version")
}

async function download_action(url, saveDir) {
  try {
    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir, { recursive: true })
    }

    const fileName = path.basename(url)
    const filePath = path.join(saveDir, fileName)

    console.log(`Downloading from: ${url}`)
    console.log(`Saving to: ${filePath}`)

    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    })

    const writer = fs.createWriteStream(filePath)

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
      writer.on("finish", () => {
        console.log(`Downloaded successfully: ${filePath}`)
        resolve(filePath)
      })
      writer.on("error", reject)
    })
  } catch (error) {
    console.error(`Failed to download: ${url}`)
    throw error
  }
}

async function download_browser() {
  const browser_dir = path.resolve(process.cwd(), "./browser")
  const chromedriver_dir = path.resolve(process.cwd(), "./driver")
  const platform = os.platform()
  await deleteFile({ file_path: "./browser", recursive: true, force: true })
  await deleteFile({ file_path: "./driver", recursive: true, force: true })
  try {
    const urls = await get_download_url() // Await the URLs
    console.log("URLs retrieved:", urls)
    let chromeurl, driverurl
    if (platform === "darwin") {
      await download_action(urls.chrome_mac, browser_dir)
      await download_action(urls.chromedriver_mac, chromedriver_dir)
      chromeurl = urls.chrome_mac
      driverurl = urls.chromedriver_mac
    } else if (platform === "win32") {
      await download_action(urls.chrome_windows, browser_dir)
      await download_action(urls.chromedriver_windows, chromedriver_dir)
      chromeurl = urls.chrome_windows
      driverurl = urls.chromedriver_windows
    } else if (platform === "linux") {
      await download_action(urls.chrome_linux, browser_dir)
      await download_action(urls.chromedriver_linux, chromedriver_dir)
      chromeurl = urls.chrome_linux
      driverurl = urls.chromedriver_linux
    } else {
      throw new Error(`Unsupported platform: ${platform}`)
    }
    console.log("All downloads completed successfully.")
    await unzipAndRename({
      zipFilePath: `./browser/${chromeurl.substring(
        chromeurl.lastIndexOf("/")
      )}`,
      extractToPath: "./browser",
      newName: "browserBinary",
    })
    await unzipAndRename({
      zipFilePath: `./driver/${driverurl.substring(
        driverurl.lastIndexOf("/")
      )}`,
      extractToPath: "./driver",
      newName: "browserDriver",
    })
    await deleteFile({
      file_path: `./browser/${chromeurl.substring(chromeurl.lastIndexOf("/"))}`,
      recursive: true,
      force: true,
    })
    await deleteFile({
      file_path: `./driver/${driverurl.substring(driverurl.lastIndexOf("/"))}`,
      recursive: true,
      force: true,
    })
  } catch (error) {
    console.error("Error downloading browser or driver:", error.message)
  }
}

download_browser()
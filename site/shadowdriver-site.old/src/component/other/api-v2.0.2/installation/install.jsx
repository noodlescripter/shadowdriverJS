export default function InstallShaowdriverJS() {
  return (
    <div className="container py-5">
      <div id="installation" className="">
        {/* Title Section */}
        <h2 className="mb-4 text-primary fw-semibold display-6">
          ShadowdriverJS Installation
        </h2>
        <hr
            style={{
              height: "5px", // Thickness of the line
              backgroundColor: "white", // Line color
              border: "none", // Removes default border styling
              margin: "20px 0", // Optional spacing
            }}
          />
        {/* Prerequisites Section */}
        <div className="mb-4">
          <h4 className="text-primary fw-bold mb-3">Prerequisites</h4>
          <p className="fs-5">
            Before installing ShadowdriverJS, ensure the following:
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <span className="text-success">✔</span> Node.js (version 18.x or higher)
            </li>
            <li className="mb-2">
              <span className="text-success">✔</span> npm (comes with Node.js)
            </li>
          </ul>
          <p className="text-white fs-5">
            Verify the versions with the following commands:
          </p>
          <pre className="text-warning p-3 rounded mb-3" style={{ background: "#1a1e36" }}>
            <code>node -v</code>
          </pre>
          <pre className="text-warning p-3 rounded" style={{ background: "#1a1e36" }}>
            <code>npm -v</code>
          </pre>
        </div>

        {/* Installation Section */}
        <div className="mb-4">
          <h4 className="text-primary fw-bold mb-3">Global Installation</h4>
          <p className="fs-5">
            Install ShadowdriverJS globally to use its initialization tool across your system:
          </p>
          <pre className="text-warning p-3 rounded" style={{ background: "#1a1e36" }}>
            <code>npm install -g shadowdriver-init@latest</code>
          </pre>
        </div>

        {/* New Project Setup Section */}
        <div className="mb-4">
          <h4 className="text-primary fw-bold mb-3">Setting Up a New Project</h4>
          <p className="fs-5">
            To initialize a new project, use the following command:
          </p>
          <pre className="text-warning p-3 rounded" style={{ background: "#1a1e36" }}>
            <code>npx shadowdriver-init</code>
          </pre>
          <p className="fs-5">
            This command will create a new project folder, generate configuration files, and install
            all necessary dependencies.
          </p>
        </div>

        {/* Example Workflow */}
        <div>
          <h4 className="text-primary fw-bold mb-3">Example Workflow</h4>
          <p className="fs-5">
            Follow these steps to get started with ShadowdriverJS:
          </p>
          <ol className="fs-5">
            <li className="mb-3">
              Install the initialization tool globally:
              <pre className="text-warning p-3 rounded mt-2" style={{ background: "#1a1e36" }}>
                <code>npm install -g shadowdriver-init@latest</code>
              </pre>
            </li>
            <li className="mb-3">
              Navigate to your desired directory and initialize a project:
              <pre className="text-warning p-3 rounded mt-2" style={{ background: "#1a1e36" }}>
                <code>npx shadowdriver-init</code>
              </pre>
            </li>
            <li>
              Confirm the installation by running:
              <pre className="text-warning p-3 rounded mt-2" style={{ background: "#1a1e36" }}>
                <code>shadowdriver-init --version</code>
              </pre>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
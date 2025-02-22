import { useState } from "react";
export default function Examples({ children, ...props }) {
    const [side, styles] = useState(props.side || "left");
    return (
        <div className="container mx-auto p-6 min-w-full">
            <div className="hero bg-base-200 rounded-xl shadow-lg">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 py-8 sm:py-12">

                    {/* Code block - responsive width and font size */}
                    {
                        side === "left" ? (

                            <div className="mockup-code w-full lg:w-1/1 text-sm sm:text-base lg:text-lg p-4 sm:p-6 lg:p-8 overflow-x-auto">
                                {/* number of pre tag with depends on the props */}
                                {children}
                                <pre data-prefix=">" className="whitespace-pre-wrap">
                                    <code className="text-green-500">npm install -g shadowdriver-init@latest</code>
                                </pre>
                                <pre data-prefix=">" className="whitespace-pre-wrap">
                                    <code className="text-pink-500">npx shadowdriver-init</code>
                                </pre>
                                <pre data-prefix=">" className="whitespace-pre-wrap">
                                    <code className="text-green-400">npx shadow exec shadow.conf.js --spec e2e/sample/sample.spec.js</code>
                                </pre>
                            </div>
                        ) : null
                    }


                    {/* Content section - responsive text and spacing */}
                    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            {props.title || "Install ShadowdriverJS and Get Started!"}
                        </h1>
                        <p className="text-base sm:text-lg opacity-90">
                            {props.description || "Fast, reliable testing for modern web applications inspired by Protractor and WebDriverJS."}
                        </p>
                        {props.button ? (
                            <button className="btn btn-primary w-full sm:w-auto">
                                {props.buttonText || "Documentsation"}
                            </button>
                        ) : null}

                    </div>
                    {/* Code block - responsive width and font size */}
                    {
                        side === "right" ? (
                            <div className="mockup-code w-full lg:w-1/2 text-sm sm:text-base lg:text-lg p-4 sm:p-6 lg:p-8 overflow-x-auto">
                                {children}
                                <pre data-prefix=">" className="whitespace-pre-wrap">
                                    <code>npm install shadowdriver</code>
                                </pre>
                                <pre data-prefix=">" className="whitespace-pre-wrap">
                                    <code>npx shadowdriver init</code>
                                </pre>
                                <pre data-prefix=">" className="whitespace-pre-wrap">
                                    <code className="">npx shadow exec shadow.conf.js --spec e2e/sample/sample.spec.js</code>
                                </pre>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Examples from '../components/HomepageFeatures/examples';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const image = require('@site/static/img/animation.gif').default;
  return (
    <div className="container mx-auto p-6 min-w-full">

      <div
        className="hero shadow-lg bg-base-200 rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '700px',
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Next-Generation Web Testing</h1>
            <p className="mb-5">
              Fast, reliable testing for modern web applications inspired by Protractor and WebDriverJS.
            </p>
            <Link
              to={'/docs/intro'}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Alert() {
  const version = require("../../versions")
  return (
    <div className='container mx-auto p-2 min-w-4xls'>

      <div role="alert" className="alert mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>A new version of shadowdriverJS is available {version[0].label}
          <a href={"https://www.npmjs.com/package/shadowdriverjs"} className="alert-link"> View NPM package</a>
        </span>

      </div>
    </div>

  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const image = require('@site/static/img/tc.png').default;

  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Alert />

      <HomepageHeader />
      <main>
        <Examples button={true} buttonText="Documentation"></Examples>
        <Examples button={false} side="right"
          title="Integrating with Mocha"
          description="ShadowDriverJS integrates seamlessly with Mocha, making it easy to write and run your tests. Here’s a brief example of how you can set up a test:"
        >
          <div>
            <img src={image
            } alt="Shadowdriver" />
          </div>
        </Examples>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}

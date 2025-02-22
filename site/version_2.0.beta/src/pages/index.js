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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Examples button={true} buttonText="Documentation"></Examples>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

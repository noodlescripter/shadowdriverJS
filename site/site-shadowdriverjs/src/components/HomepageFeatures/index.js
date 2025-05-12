import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        ShadowDriverJS is designed with simplicity and ease of use at its core, making it incredibly straightforward to install and set up. This streamlined process allows you to get your website or application running quickly without the complexity often found in other frameworks. Whether you're a seasoned developer or just starting out, ShadowDriverJS provides an intuitive interface that minimizes friction between you and your project. By focusing on simplicity, we ensure that you can concentrate on what matters most—building and deploying your application—without getting bogged down by intricate setup processes.
      </>
    ),
  },
  {
    title: 'Browser Support',
    Svg: require('@site/static/img/google-chrome.svg').default,
    description: (
      <>
       ShadowDriverJS is fully compatible with the latest stable version of Google Chrome, ensuring that all features and functionalities work seamlessly. We maintain support for the two most recent major versions of Chrome to provide users with the best experience and compatibility. This approach allows us to catch any potential issues early and ensure smooth operation across different Chrome releases. For optimal performance and security, we recommend using one of these supported versions. If you encounter any issues, please feel free to reach out for assistance or check our documentation for known limitations.
      </>
    ),
  },
  {
    title: 'Powered by WebdriverJS',
    Svg: require('@site/static/img/lightning.svg').default,
    description: (
      <>
        ShadowDriverJS is powered by WebDriverJS, ensuring robust and seamless integration for automation tasks. This framework leverages the latest advancements in WebDriver technology to provide a powerful toolset for testing and automating web applications. By using WebDriverJS under the hood, ShadowDriverJS simplifies complex automation processes, offering easy-to-use APIs and features that enhance your development workflow. Whether you're building test scripts or automating interactions with web elements, ShadowDriverJS provides consistent performance and reliability across different environments.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

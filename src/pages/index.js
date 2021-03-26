import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Type from './components/Type';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'svg/undraw_bookmarks_r6up.svg',
    description: (
      <>
        Ut vehicula dapibus lobortis. Sed dapibus ullamcorper posuere. Morbi imperdiet ut sem sed sodales. Suspendisse non leo vitae dui congue tincidunt hendrerit ac orci. Curabitur pellentesque orci arcu, ultricies auctor odio maximus vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus rhoncus tincidunt orci, ac placerat ante bibendum at. Maecenas a elit nisl.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'svg/undraw_personal_goals_edgd.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas lectus. Etiam quis augue arcu. Nulla eget tristique sapien. Integer in tortor accumsan, interdum enim porttitor, aliquam quam. Donec nisl eros, mattis non laoreet a, porta vitae ligula. Vivamus pharetra massa ac urna volutpat, eu dictum leo luctus 
      </>
    ),
  },
  {
    title: <>Multi Integration</>,
    imageUrl: 'svg/undraw_online_transactions_02ka.svg',
    description: (
      <>
        Suspendisse luctus purus id sapien cursus ultricies. Sed eget euismod eros. Etiam sollicitudin nisl vestibulum sagittis lacinia. Aenean lobortis purus at lectus lacinia gravida. Vestibulum egestas id quam tincidunt vehicula. Vivamus cursus dolor nisi, id consectetur nibh placerat nec. Vestibulum vel blandit tellus.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A documentaion site">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <img className="spLogo" src={useBaseUrl('img/logo.png')} />
          <p />
          <Type />
          <p className="spacer"/>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/greeting')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

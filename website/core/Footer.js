/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href="https://userndot.com" className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('fundamentals/about')}>
              Getting Started
            </a>
            <a href={this.docUrl('fundamentals/overview')}>
              Fundamentals
            </a>
            <a href={this.docUrl('android/overview')}>
              Android
            </a>
            <a href={this.docUrl('iOS/overview')}>
              iOS
            </a>
            <a href={this.docUrl('web/overview')}>
              Website
            </a>
            <a href={this.docUrl('integration/overview')}>
              Integration
            </a>
            <a href={this.docUrl('examples/overview')}>
              Examples
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a style={{display: 'none'}} href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a href="/">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/contact-us">Contact Us</a>
          </div>
          <div>
            <h5>More</h5>
            <a style={{display: 'none'}} href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://userndot.com/contact-us">Contact Us</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;

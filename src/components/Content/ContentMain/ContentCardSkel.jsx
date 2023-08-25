import React from 'react';
import ContentLoader from 'react-content-loader';

const ContentCardSkel = (props) => (
  <ContentLoader
    speed={2}
    width={508}
    height={602}
    viewBox="0 0 508 602"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="340" y="532" rx="3" ry="3" width="88" height="15" />
    <rect x="115" y="532" rx="3" ry="3" width="52" height="15" />
    <rect x="81" y="402" rx="3" ry="3" width="410" height="13" />
    <rect x="120" y="457" rx="3" ry="3" width="327" height="13" />
    <rect x="189" y="564" rx="3" ry="3" width="146" height="19" />
    <rect x="198" y="61" rx="0" ry="0" width="180" height="235" />
  </ContentLoader>
);

export default ContentCardSkel;

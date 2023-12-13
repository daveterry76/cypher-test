import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({ title }) => {
  const disqusShortname = 'techinterviewprep';
  const disqusConfig = {
    url: 'http://localhost:3000',
    identifier: 'article-id',
    title: title || 'Title of Your Article',
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default Disqus;

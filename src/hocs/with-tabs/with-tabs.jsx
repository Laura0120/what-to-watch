import React, {useState} from 'react';

import Tabs from '../../components/tabs/tabs';
import {TABS_NAME} from '../../const';

const withTabs = (Component) => {
  const WithTabs = (props) =>{
    const [currentTab, setCurrentTab] = useState(TABS_NAME.OVERVIEW);

    const onTabChange = (evt) => {
      evt.preventDefault();
      const tab = evt.target;
      setCurrentTab(tab.textContent);
    };

    return <Component
      {...props}
      renderTabs = {(movie, comments) => {
        return (
          <Tabs
            currentTab = {currentTab}
            onChangeTab = {onTabChange}
            movie = {movie}
            comments={comments}
          />
        );
      }}
    />;
  };

  return WithTabs;
};

export default withTabs;

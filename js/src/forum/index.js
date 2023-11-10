import app from 'flarum/forum/app';
import UserPage from 'flarum/components/UserPage';
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/common/components/SettingsPage';
import TextEditor from 'flarum/common/components/Switch';
import FieldSet from 'flarum/common/components/FieldSet';
import ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('hamcq/usercss', () => {
  // console.log('[hamcq/usercss] Hello, forum!');
  extend(UserPage.prototype, 'oncreate', function () {   
    $('#app').css()
    
  })

  extend(SettingsPage.prototype, 'settingsItems', function (items) {
    items.add(
      'userPageCss',
      FieldSet.component(
        {
          label: "自定义 CSS",
          className: '',
        },
        this.cssItems().toArray()
      )
    );
  });

  SettingsPage.prototype['cssItems'] = function () {
    const items = new ItemList();
    items.add(
      'css-enable',
      TextEditor.component(
        {
          // state: this.user.preferences().userPageCss,
          onsubmit: (value) => {
            this.userPageCssLoading = true;

            this.user.savePreferences({ userPageCss: value }).then(() => {
              this.userPageCssLoading = false;
              m.redraw();
            });
          },
          loading: this.userPageCssLoading,
        },
        "自定义 CSS"
      )
    );
    return items;
  }
});

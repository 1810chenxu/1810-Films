import React from 'react';
import './home.css';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is: true,
      close: false
    };
  }
  close = () => {
    this.setState({
      close: !this.state.close
    });
  };
  Logup = event => {
    this.setState({
      is: false
    });
  };
  Login = () => {
    this.setState({
      is: true
    });
  };
  render() {
    return (
      <React.Fragment>
        <button className="con-right" onClick={this.close}>
          登录/注册
        </button>
        <div>
        <div
          className="waibox"
          style={this.state.close ? { display: 'block' } : { display: 'none' }}
        >
          <div className="bigbox">
            <div className="close" onClick={this.close}>
              <span>X</span>
            </div>
            <form className={this.state.is ? 'sign-in' : 'sing-innone'}>
              <div className="div-loginin">
                <input type="text" placeholder="用户名" />
              </div>
              <div className="div-loginin">
                <input type="text" placeholder="密码" />
              </div>
              <div className="div-submit">
                <input type="button" value="登录" />
              </div>
              <div className="div-trans">
                没有账号？
                <span onClick={this.Logup}>注册</span>
                <span style={{ float: 'right' }}>忘记密码?</span>
              </div>
              <div className="div-social">
                <h2>社交账号快速登录</h2>
                <a
                  href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101561841&redirect_uri=http%3A%2F%2Fwww.lookae.com%2Fwp-content%2Fplugins%2Ferphplogin%2Fauth%2Fqq-callback.php&state=74f19b84233a4bd9822893f3d9873228&scope=get_user_info,add_share,list_album,add_album,upload_pic,add_topic,add_one_blog,add_weibo"
                  className="login-qq"
                >
                  <i></i>
                  <span style={{ float: 'left', marginTop: '-3px' }}>
                    QQ登录
                  </span>
                </a>
                <a
                  href="https://api.weibo.com/oauth2/authorize?client_id=2843605060&response_type=code&redirect_uri=http://www.lookae.com/wp-content/plugins/erphplogin/auth/sina-callback.php&state=6b648b4fbfe67eacdf890c0d1b951a8c"
                  className="login-weibo"
                >
                  <i></i>
                  <span style={{ float: 'left', marginTop: '-3px' }}>
                    微博登录
                  </span>
                </a>
                <a
                  href="https://open.weixin.qq.com/connect/qrconnect?appid=wx8e2b40182aaa0430&redirect_uri=http://www.lookae.com/wp-content/plugins/erphplogin/auth/weixin.php&response_type=code&scope=snsapi_login&state=erphplogin_weixin#wechat_redirect"
                  className="login-weixin"
                >
                  <i></i>
                  <span style={{ float: 'left', marginTop: '-3px' }}>
                    微信登录
                  </span>
                </a>
              </div>
            </form>
            <form className={this.state.is ? 'sign-up' : 'sign-upblock'}>
              <div className="div-logup">
                <input type="text" placeholder="用户名" />
              </div>
              <div className="div-logup">
                <input type="text" placeholder="邮箱" />
              </div>
              <div className="div-logup">
                <input type="text" placeholder="密码" />
              </div>
              <div className="div-logup">
                <input
                  type="text"
                  placeholder="验证码"
                  style={{ width: '125px', float: 'left' }}
                />
                <span>获取邮箱验证码</span>
              </div>
              <div className="div-submit">
                <input type="button" value="注册" />
              </div>
              <div className="div-trans">
                已有账号？
                <span onClick={this.Login}>登录</span>
              </div>
              <div className="div-social">
                <h2>社交账号快速登录</h2>
                <a
                  href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101561841&redirect_uri=http%3A%2F%2Fwww.lookae.com%2Fwp-content%2Fplugins%2Ferphplogin%2Fauth%2Fqq-callback.php&state=74f19b84233a4bd9822893f3d9873228&scope=get_user_info,add_share,list_album,add_album,upload_pic,add_topic,add_one_blog,add_weibo"
                  className="login-qq"
                >
                  <i></i>
                  <span style={{ float: 'left', marginTop: '-3px' }}>
                    QQ登录
                  </span>
                </a>
                <a
                  href="https://api.weibo.com/oauth2/authorize?client_id=2843605060&response_type=code&redirect_uri=http://www.lookae.com/wp-content/plugins/erphplogin/auth/sina-callback.php&state=6b648b4fbfe67eacdf890c0d1b951a8c"
                  className="login-weibo"
                >
                  <i></i>
                  <span style={{ float: 'left', marginTop: '-3px' }}>
                    微博登录
                  </span>
                </a>
                <a
                  href="https://open.weixin.qq.com/connect/qrconnect?appid=wx8e2b40182aaa0430&redirect_uri=http://www.lookae.com/wp-content/plugins/erphplogin/auth/weixin.php&response_type=code&scope=snsapi_login&state=erphplogin_weixin#wechat_redirect"
                  className="login-weixin"
                >
                  <i></i>
                  <span style={{ float: 'left', marginTop: '-3px' }}>
                    微信登录
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

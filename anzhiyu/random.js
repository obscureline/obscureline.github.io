var posts=["2024/02/12/4.Linux/","2024/02/12/3.SQL基础/","2024/02/12/5.Spring/","2024/02/12/8.MyBatisPlus/","2024/02/12/6.SpringMVC/","2024/02/12/9.RabbitMQ/","2024/02/12/7.MyBatis/","2024/02/12/10.Redis概念/","2024/02/12/11.SQL概念/","2024/02/12/12.SpringCloud/","2024/02/12/13.多线程/","2024/02/12/14.JDK8新特性/","2024/02/12/15.算法/","2024/02/12/16.SpringSecurity/","2024/02/12/17.JVM/","2024/02/12/19.JSON/","2024/02/12/18.索引/","2024/02/12/21.JdbcTemplate/","2024/02/12/22.Elasticsearch/","2024/02/12/20.MongoDB/","2024/02/12/23.SpringCloudAlibaba/","2024/02/12/24.事务/","2024/02/12/25.Web/","2024/02/12/28.JSON/","2024/02/12/27.VUE/","2024/02/12/29.IO流/","2024/02/12/26.UI/","2024/02/12/30.工作流Activiti/","2024/02/12/31.ApacheKafka/","2024/02/12/33.SpringCache/","2024/02/12/34.数据结构/","2024/02/12/35.集合底层原理/","2024/02/12/36.热门项目1/","2024/02/12/37.热门项目2/","2024/02/12/38.Docker/","2024/02/12/32.MinIO/","2024/02/12/2.SQLOptimize/","2022/10/02/1.HelloWorld/","2024/02/20/39.代码优化/","2024/02/20/40.代码优化/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
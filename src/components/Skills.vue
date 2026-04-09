<template>
    <div class="skills">
      
      <h2 class="h4 text-white fw-bold hero mb-2">I like <em>building things</em> and these are what I use.</h2>
      <p class="text-secondary fw-small mb-4">*Highlighted indicates proficient and being used regularly.</p>

      <div class="row">

        <div class="col col-12 mb-4">
          <div class="text-secondary text-uppercase fw-small mb-3">CMS</div>
          <div class="skill-icons">
            <Skill :name="'Wordpress'" :url="'/asset/skills/wordpress.svg'" ></Skill>
            <Skill :name="'Magento'" :url="'/asset/skills/magento.svg'" ></Skill>
            <Skill :name="'Opencart'" :url="'/asset/skills/opencart.svg'" ></Skill>
            <Skill :name="'Shopify'" :url="'/asset/skills/shopify.svg'" ></Skill>
          </div>
        </div>
        
        <div class="col col-12 mb-4">
          <div class="text-secondary text-uppercase fw-small mb-3">Development</div>
          <div class="skill-icons">
            <Skill :name="'PHP'" :url="'/asset/skills/php.svg'" ></Skill>
            <Skill :name="'Laravel'" :url="'/asset/skills/laravel.svg'" ></Skill>
            <Skill :name="'HTML5'" :url="'/asset/skills/html.svg'" ></Skill>
            <Skill :name="'CSS3'" :url="'/asset/skills/css.svg'" ></Skill>
            <Skill :name="'SASS'" :url="'/asset/skills/sass.svg'" ></Skill>
            <Skill :name="'JavaScript'" :url="'/asset/skills/js.svg'" ></Skill>
            <Skill :name="'React JS'" :url="'/asset/skills/react.svg'" ></Skill>
            <Skill :name="'Vue JS'" :url="'/asset/skills/vue.svg'" ></Skill>
            <Skill :name="'Electron JS'" :url="'/asset/skills/electron.svg'" ></Skill>
            <Skill :name="'Apache Cordova'" :url="'/asset/skills/cordova.svg'" ></Skill>
            <Skill :name="'Bootstrap'" :url="'/asset/skills/bootstrap.svg'" ></Skill>
            <Skill :name="'jQuery'" :url="'/asset/skills/jquery.svg'" ></Skill>
          </div>
        </div>

        <div class="col col-12 mb-4">
          <div class="text-secondary text-uppercase fw-small mb-3">Database</div>
          <div class="skill-icons">
            <Skill :name="'MySQL'" :url="'/asset/skills/mysql.svg'" ></Skill>
            <Skill :name="'MariaDB'" :url="'/asset/skills/mariadb.png'" ></Skill>
          </div>
        </div>

        <div class="col col-12 mb-4">
          <div class="text-secondary text-uppercase fw-small mb-3">WEBMASTER TOOLS</div>
          <div class="skill-icons">
            <Skill :name="'Apache'" :url="'/asset/skills/apache.svg'" ></Skill>
            <Skill :name="'Nginx'" :url="'/asset/skills/nginx.svg'" ></Skill>
            <Skill :name="'Cloudflare'" :url="'/asset/skills/cloudflare.svg'" ></Skill>
            <StaticSkill :title="'DNS'" :name="'DNS Management'"></StaticSkill>
            <Skill :name="'Vercel'" :url="'/asset/skills/vercel.svg'" ></Skill>
            <Skill :name="'Redis'" :url="'/asset/skills/redis.svg'" ></Skill>
            <Skill :name="'CPanel'" :url="'/asset/skills/cpanel.svg'" ></Skill>
          </div>
        </div>

        <div class="col col-12 mb-4">
          <div class="text-secondary text-uppercase fw-small mb-3">Wordpress Specific</div>
          <div class="skill-icons">
            <Skill :name="'ACF'" :url="'/asset/skills/acf.svg'" ></Skill>
            <Skill :name="'Woocommerce'" :url="'/asset/skills/woocommerce.svg'" ></Skill>
            <Skill :name="'Gutenberg Blocks'" :url="'/asset/skills/gutenberg.jpg'" ></Skill>
            <Skill :name="'Divi'" :url="'/asset/skills/divi.png'" ></Skill>
            <Skill :name="'Elementor'" :url="'/asset/skills/elementor.png'" ></Skill>
            <Skill :name="'WP Bakery'" :url="'/asset/skills/wpbakery.webp'" ></Skill>
            <Skill :name="'WPML'" :url="'/asset/skills/wpml.svg'" ></Skill>
          </div>
        </div>

        <div class="col col-12 mb-4">
          <div class="text-secondary text-uppercase fw-small mb-3">Miscelaneous Tools</div>
          <div class="skill-icons">
            <Skill :name="'Git'" :url="'/asset/skills/git.svg'" ></Skill>
            <Skill :name="'VSCode'" :url="'/asset/skills/vscode.svg'" ></Skill>
            <Skill :name="'Postman'" :url="'/asset/skills/postman.svg'" ></Skill>
            <Skill :name="'Keycloak SSO'" :url="'/asset/skills/keycloak.svg'" ></Skill>
            <Skill :name="'Zapier'" :url="'/asset/skills/zapier.svg'" ></Skill>
          </div>
        </div>

      </div>

    </div>
</template>
<script>
import Skill from '@/components/Skill.vue';
import StaticSkill from '@/components/StaticSkill.vue';

export default {
  name: 'Skills',
  components: {
    Skill,
    StaticSkill,
  },
}
</script>
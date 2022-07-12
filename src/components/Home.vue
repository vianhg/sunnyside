<template>
  <section class="main">
      <div class="panel creative">
        <div class="menu">
          <span class="brand"><h3>sunnyside</h3></span>
          <nav id="hamnav">
            <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />
            <div id="hamitems">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </div>
        <div class="header">
          <h2 class="title">We are creatives</h2>
        </div>
      </div>
      <div class="panel transform">
        <img src="../assets/images/mobile/image-transform.jpg" alt="" />
        <div class="panel--footer">
          <div>
            <h2 class="title">Transform your brand</h2>
            <p class="summary">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="">Learn more</a>
          </div>
        </div>
      </div>
      <div class="panel stand-out">
        <img src="../assets/images/mobile/image-stand-out.jpg" alt="" />
        <div class="panel--footer">
          <div>
            <h2 class="title">Stand out to the right audience</h2>
            <p class="summary">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="">Learn more</a>
          </div>
        </div>
      </div>
      <div class="gdph">
      <div class="panel graphic-design">
        <div class="panel--floating-footer">
          <h2 class="title">Graphic design</h2>
          <p class="summary">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div class="panel photography">
        <div class="panel--floating-footer">
          <h2 class="title">Photography</h2>
          <p class="summary">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
      <div class="panel client-testimonial">
        <h2 class="title">Client testimonials</h2>
        <div class="reviews">
          <article class="review">
            <img src="../assets/images/image-emily.jpg" alt="" class="review--pic" />
            <p class="review--quote">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <span class="review--author">Emily R.</span>
            <span class="review--role">Marketing Director</span>
          </article>
          <article class="review">
            <img src="../assets/images/image-thomas.jpg" alt="" class="review--pic" />
            <p class="review--quote">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <span class="review--author">Thomas S.</span>
            <span class="review--role">Chief Operating Officer</span>
          </article>
          <article class="review">
            <img src="../assets/images/image-jennie.jpg" alt="" class="review--pic" />
            <p class="review--quote">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <span class="review--author">Jennie F.</span>
            <span class="review--role">Business Owner</span>
          </article>
        </div>
      </div>
      <div class="four-images">
        <img
          src="../assets/images/mobile/image-gallery-milkbottles.jpg"
          alt="milk bottles"
        />
        <img src="../assets/images/mobile/image-gallery-orange.jpg" alt="orange" />
        <img src="../assets/images/mobile/image-gallery-cone.jpg" alt="cone" />
        <img src="../assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar" />
      </div>
      <div class="footer">
        <h2 class="footer--title">sunnyside</h2>
        <nav class="footer--nav">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </nav>
        <nav class="footer--social-network">
          <a href="#"><img src="../assets/images/icon-facebook.svg" alt="F" /></a>
          <a href="#"
            ><img src="../assets/images/icon-instagram.svg" alt="Instagram"
          /></a>
          <a href="#"><img src="../assets/images/icon-twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="../assets/images/icon-pinterest.svg" alt="P" /></a>
        </nav>
      </div>
    </section>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">vianhg</a>.
    </div>
</template>

<script>
export default {
  name: "Home",
  setup() {},
};
</script>

<style lang="scss">
  @import "@/assets/css/tokens.scss";
  @import "@/assets/css/main.scss";
</style>

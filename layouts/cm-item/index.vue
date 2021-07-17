<template>
  <div class="film-item style_1 action drama " onclick="void(0)" style="position: absolute; left: 0px; top: 0px;">
    <div class="film-image">
      <img width="270" height="390" src="https://demo.harutheme.com/circle/wp-content/uploads/2017/08/wynonna.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" srcset="https://demo.harutheme.com/circle/wp-content/uploads/2017/08/wynonna.jpg 270w, https://demo.harutheme.com/circle/wp-content/uploads/2017/08/wynonna-208x300.jpg 208w" sizes="(max-width: 270px) 100vw, 270px">                    <div class="film-label hot">
      Hot            </div>
      <div class="film-icon">
        <a href="javascript:;" class="view-film-button" data-id="1119" data-player="none" data-server=""></a>
      </div>
    </div>
    <div class="film-meta">
      <div class="film-rating"><span class="point">8.7</span><span class="total">/10</span></div>
      <h3 class="film-title"><a href="https://demo.harutheme.com/circle/film/wynonna/">Wynonna</a></h3>
      <div class="film-category"><a href="https://demo.harutheme.com/circle/film-category/action/" rel="tag">Action</a> / <a href="https://demo.harutheme.com/circle/film-category/drama/" rel="tag">Drama</a></div>
    </div>
  </div>
</template>

<style>
.film-item.style_1 {
  padding: 10px;
}
.film-item {
  width: 20%;
}

 .film-item.style_1 .film-image {
  overflow: hidden;
  position: relative;
}
 .film-item.style_1:hover .film-image:before {
  opacity: 1;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.film-label {
  position: absolute;
  right: 0;
  top: 20px;
  padding: 1px 15px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>

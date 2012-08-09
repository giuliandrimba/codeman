(function() {

  __t('app.config').Assets = (function() {

    function Assets() {}

    Assets.header = {
      images: {
        bg: "/images/header/bg-header.jpg",
        top_stripe: "/images/header/top-stripe.png",
        drop: "/images/header/drop.png",
        drop_bg: "/images/header/drop-bg.png",
        logo_label: "/images/header/logo-text.png",
        brain_arrow: "/images/header/brain-arrow.png",
        quote: "/images/header/quote-flag.png",
        symbols: "/images/header/symbols.png"
      },
      animations: {
        splatter_logo: "/animations/header/splatter_logo.json",
        logo: "/animations/header/logo.json",
        splatter_header: "/animations/header/bg-header-topright.json",
        brain: "/animations/header/brain.json"
      }
    };

    return Assets;

  })();

}).call(this);

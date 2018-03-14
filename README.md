`        {% include category/updated.html %}
`


# full website - altcointrading.net

`All content belongs to github.com/altcointrading`

# the theme

The Jekyll theme is available for free from [this repo](https://github.com/altcointrading/trading).

It is a clean lightweight theme optimized with an old version of AMP (Google's Accelerated Mobile Pages).

The theme's layout `forestry` is compatible with the publishing tool [Forestry](https://forestry.io/).

**Developers:** [AT](https://github.com/altcointrading), [mthjn](https://github.com/mthjn), [xin_chao](https://bitbucket.org/xin_chao)

________________________

(c) 2016 - 2018 https://github.com/altcointrading

/////


```
<section>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script type="text/javascript">
  $(document).ready(function($) {

    $.get("https://api.teletext.io/api/v1/geo-ip", function(response) {
      var country = response["alpha2"];
      console.log(country);
      // ZA, IN, KR
      if ( country == 'US' ) {
        $("#nous").addClass("hidden");
      } else {
        $("#nous").addClass("visible");
      }
    });


  });
  </script>
  <!-- SLOT 3 -->
  <p>{{ site.affop.system }}</p>


</section>
```


////

old ads by FuckSense(TM)

```
oldads:
  aads728noamp: '<div class="clearfix"><iframe data-aa="147076" src="https://ad.a-ads.com/147076?size=728x90" scrolling="no" style="width:728px; height:90px; border:0px; padding:0;overflow:hidden" allowtransparency="true" frameborder="0"></iframe></div>'
  aads728: '<div class="clearfix clearfix adfix"><amp-iframe width="728px" height="90px"
    layout="responsive" data-aa="147076" sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
    src="https://ad.a-ads.com/147076?size=728x90"><amp-img layout="fill" src="/img/ads/ad-placeholder.jpg"
     placeholder></amp-img></amp-iframe></div><div class="clearfix"></div>'
  sidebarnoamp: '<iframe data-aa='147074' src='https://ad.a-ads.com/147074?size=336x280' scrolling='no' style='width:336px; height:280px; border:0px; padding:0;overflow:hidden' allowtransparency='true' frameborder='0'></iframe>'
```

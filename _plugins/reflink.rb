# amazon.rb - amazon affiliate links for jekyll
# assumes that you have a configuration variable called 'amazon_associate_id' with your associate id

# usage: {{ asin | amazon_product_href }}
# returns url of a product

# usage: {{ asin | amazon_image_href: 'M' }}
# returns image of the product, size argument can be S, M, or L, default M

# usage: {{ asin | amazon_product: 'A Product' }}
# returns an html link to a product

# usage: {{ asin | amazon_image: 'M' }}
# returns an html IMG of the product

module Jekyll
  module Filters

    def at_product(key, text)
      # {{ key | at_product: 'Text' }}
      key ? "<a href=\"#{@context.registers[:site].config.reflink[key]}\">#{text}</a>" : text
    end


    def amazon_product_href(asin)
      "http://amazon.com/exec/obidos/ASIN/#{asin}/#{@context.registers[:site].config['amazon_associate_id']}"
    end

    def amazon_image_href(asin, size)
      "http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=#{asin}&Format=_#{size ? size : 'M'}L110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=#{@context.registers[:site].config['amazon_associate_id']}"
    end

    def amazon_product(asin, text)
      asin ? "<a href=\"#{amazon_product_href(asin)}\">#{text}</a>" : text

    end

    def amazon_image(asin, size)
      "<img src=\"#{amazon_image_href(asin, size)}\" />"
    end

  end
end

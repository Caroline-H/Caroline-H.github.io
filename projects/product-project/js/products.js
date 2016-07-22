/* global $ _ */
$(document).ready(function(event) {
    $.getJSON('data/product.json', function (data) {
        
        //create the list of products displayed on the page
        let path = "/projects/product-project/img/product/thumbs/";
        let pathBig = "/projects/product-project/img/product/";
        function showProducts (array) {
            $('#list-content').empty();
            let lisPics = _.map(array, function(product) {

            let $row = $('<div>').addClass('row');
            let $col3 = $('<div>').addClass('col-md-3');
            let $img = $('<img>').addClass('pic').attr('src', path + product.image)
                .attr('big', pathBig + product.image)
                .attr('desc', 'Description: ' +product.desc)
                .attr('price', 'Price: $' + product.price)
                .attr('specs', 'Specs: ' + product.specs)
                .attr('colors', 'Available colors: ' + product.availableColors);
            let $image = $col3.append($img);
            
            let $col9 = $('<div>').addClass('col-md-9');
            let $desc = $('<div>').addClass('desc').text(product.desc);
            let $price = $('<div>').addClass('price').text('$' + product.price);
            let $product = $col9.append($desc).append($price);
            
           
            $row.append($image);
            $row.append($product);
            return $row;
            
            });
            $('#list-content').append(lisPics);
            $(".row").append("<hr width='100%' />");
            
            // when you click the thumbnail, open a lightbox with bigger image
            // and more details about the product
            $('.pic').on('click', function(event) {

            const thumb = $(event.currentTarget);
            let source = thumb.attr('big');
            let desc = thumb.attr('desc');
            let price = thumb.attr('price');
            let specs = thumb.attr('specs');
            let colors= thumb.attr('colors');
            
            
            if ($('#lightbox').length > 0) {
                let $lightboxContent = $('#lightbox-content');
                $lightboxContent.empty();
                $lightboxContent.append($('<img>').attr('src', source));
                $lightboxContent.append($('<h4>').text(desc));
                $lightboxContent.append($('<p>').text(price));
                $lightboxContent.append($('<p>').text(specs));
                $lightboxContent.append($('<p>').text(colors));
                $('#lightbox').show();
            } else {
                var $lightbox = $('<div>').attr('id', 'lightbox').append($('<p>').text("Click to close"))
                    .append($('<div>').attr('id', 'lightbox-content')
                        .append($('<img>').attr('src', source))
                        .append($('<h4>').text(desc))
                        .append($('<p>').text(price))
                        .append($('<p>').text(specs))
                        .append($('<p>').text(colors)));
                $('main').append($lightbox);
                 
                $('#lightbox').on('click', function() {
            	    $('#lightbox').hide();
                }); 
            }
        });
            
        }
        
        //this displays all of the products
        showProducts(data);
        
        //this calls the search function and shows results when you click the 
        //submit bottun or hit enter
        $('#search').on('click', function(event) {
            var searchTerm = $('#search-term').val();
            var searchResults = search(data, searchTerm);
            showProducts(searchResults);
        });
        
                
        // css of nav bar
        $('nav').css('background', 'rgb(0, 250, 154)').css('display', 'flex').css('border-radius', 10);
        
        
        // This gets a list of types and displays them in the dropdown menu
        let types = _.map (data, function (product){
            return product.type;
        });
        let output = _.unique(types);
        
        let dropDown = _.map(output, function(name) {
            let $li = $('<li>').addClass(name).attr('name', name);
            let $ahref = $('<a>').attr('href', '#').text(name);
            return $li.append($ahref);
        });
        $('.dropdown-menu').append(dropDown);
        $('.dropdown-menu').append($('<li>').addClass("all")
            .append($('<a>').attr('href', '#').text('all')));
        
        
        //this displays the products with the type that you clicked
        for (var i = 0; i < dropDown.length; i++) {
            var className= dropDown[i].attr('class');
            
            $('.' + className).on('click', function(event) {
               let filteredProducts = _.filter(data, function (product) {
                 if (product.type.toUpperCase() == $(event.currentTarget).attr('name').toUpperCase()) {
                        return true;
                }  
               });
               
                 showProducts(filteredProducts);
            });
        }
        
        //if you click all data, display all data
        $('.all').on('click', function (event) {
            showProducts(data);
        });
        
        
        // create a search function   
        function search (collection, target) {
          //create something to hold objects in which target is found (array)
          var tar = target.toUpperCase();
          var results=[];
          //iterate collection (use _.each)
          _.each(collection, function(element) {
          //  isString?
              if (typeof element === "string") {
          //    if String > is target within String
                 if(_.includes(element.toUpperCase(), tar)) {
          //        push whole object into some output 
                     results.push(element);
                 }
              }
          //  isCollection()?
            if (isCollection(element)) {
          //     if search(value).length
                if(search(element, tar).length) {
          //        push whole object into some output
                    results.push(element);
                }
            } 
          });
          //return output
          return results;
        }    
    
        //create collection to test if something is a collection 
        function isCollection (element) {
            if (Array.isArray(element)) return true;
            if (element instanceof Date) return false;
            if (element === null) return false;
            if (element === undefined) return false;
            if (typeof element === "object") return true;
        } 
        
    })
    .fail(function() { console.log('getJSON on product data failed!'); });  
});
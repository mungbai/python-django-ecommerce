/* Custom JavaScript for the e-commerce platform */

jQuery(document).ready(function($) {
    'use strict';

    /* Product Grid Initialization */
    if($('.product-grid').length) {
        var $grid = $('.product-grid').isotope({
            itemSelector: '.product-item',
            layoutMode: 'fitRows'
        });
    }

    /* Cart Functionality */
    $('.add-to-cart-button').on('click', function(e) {
        e.preventDefault();
        var productId = $(this).data('product-id');
        var url = $(this).data('url');
        
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                'product_id': productId,
                'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(response) {
                if(response.status === 'success') {
                    // Update cart count
                    $('.cart-count').text(response.cart_count);
                    // Show success message
                    alert('Product added to cart successfully!');
                } else {
                    alert('Error adding product to cart');
                }
            },
            error: function() {
                alert('Error adding product to cart');
            }
        });
    });

    /* Initialize Owl Carousel */
    if($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 4 }
            }
        });
    }
});

/* global $ _ */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        const billyPics = data.images.billy;
        $('#pic-billy').attr('i', 0);
        $('#pic-billy').on('click', function(event) {
            const pic = $(event.currentTarget);
            let index = parseInt(pic.attr('i'), 10);
            index = index + 1 === billyPics.length ? 0 : index + 1;
            pic.attr('src', billyPics[index]);
            pic.attr('i', index);
        });
        
        
      
        // console.log(data);
        
        /*
         * Style the #section-bio and #section-quotes as per some of the 
         * examples we tried in the console.
         */
        $('div').css('color', 'white');
        $('main').css('background', 'grey');
        /*
         * 1. Populate the #list-top-rated <ul>:
         *
         * Loop through the top rated recordings of Billy Higgins, and, 
         * using lodash, add a styled <li> for each recording. Inspect a 
         * recording object in the console to view its available properties.
         *
         * How can you use _.map() to your advantage here?
         */
        let topRated = data.discography.topRated;
        let lis = _.map(topRated, function(recording) {
            return $('<li>').text(recording.title).addClass("top-rated");
        });
        $('#list-top-rated').append(lis);
        /*
         * 2. Create a discography <section>:
         *      a. Create a discography <section id="section-disc"> and add it 
         *         below the #section-quotes on the 
         *         index.html page.
         * 
         *      b. Create a <ul id="list-disc">, style it, and add it to the 
         *         <section id="section-disc">.
         * 
         *      c. Add a styled <li class="recording"> for every recording in 
         *         the recordings Array. What lodash methods can help you here?
         *
         *      d. Add CSS styling rules to the site.css file to style the list
         *
         *      The resulting HTML should look something like this:
         *
         *         <section id="section-disc">
         *           <ul id="list-disc">
         *               <li class="recording">
         *                   <div class="title">Title: Eastern Rebellion</div>
         *                   <div class="artist">Artist: Cedar Walton</div>
         *                   <div class="release">Release: Timeless</div>
         *                   <div class="year">Year: 1976</div>
         *               </li>
         *           </ul>
         *       </section>
         */
         $('#section-disc').append($('<ul id=list-disc>'));
         let recordings = data.discography.recordings;
         let recordingList = _.map(recordings, function (recording) {
             return $('<li>').addClass('recording')
             .attr('art', recording.art)
                .append($('<div>')).addClass('title')
                    .text(recording.title);
         });
        $('#list-disc').append(recordingList);
        $('#section-disc').prepend($('<header>').text("Recordings"));
        
        $('.recording').on('click', function(event) {
            const pic = $(event.currentTarget);
            let source = pic.attr('art');
            $('#pic-record').attr('src', source);
        });
        
        
         /*
          * 3. Below the <section id="section-disc">, create a new section for 
          * Billy's rider. Use jQuery to assemble a table to display the rider 
          * data. The rider data is at data.rider
          */
          
        //  console.log(data.rider);
        
        const rider = data.rider;
        var createTable = function (elements) {
            var createRow = function (element) {
                var $row = $("<tr>");
                var $type = $("<td>").text(element.type);
                var $desc = $("<td>").text(element.desc);
                $row.append($type);
                $row.append($desc);
                return $row;
            };
            var $table = $("<table>");
            var $rows = elements.map(createRow);
            $table.append($rows);
            return $table;
        };
        $('#section-quotes').append($('<header>').text("Rider"));
        createTable(rider).appendTo('#section-quotes');
        $('td').css('border-radius', '4px').css('border', '1.5px solid rgb(34 ,139 ,34 )');
        $('td').css('text-align', 'center');
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});



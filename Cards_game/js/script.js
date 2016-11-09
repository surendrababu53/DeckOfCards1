 /*
         * example throwing cards on the table
         */
        $(document).ready(function(){
           
            var cardDeck = $("#cardDeck").playingCards();//To generate the deck of cards

                var hand = [];
            var showError = function(msg){
                $('#error').html(msg).show();
                setTimeout(function(){
                    $('#error').fadeOut('slow');
                },3000);
            }

              /*This function showHand the cards
              @params : ,
              @return :  displaying cards on the table,
              @author :  surendra*/

            var showHand = function(){
                var el = $('#yourHand')
                el.html('');
                for(var i=0;i<hand.length;i++){
                    el.append(hand[i].getHTML());
                }
            }

            /*This function doShuffle the cards with the doShuffle
              @params : ,
              @return :  To shuffle the deck of cards,
              @author :  surendra*/

            var doShuffle = function(){
                cardDeck.shuffle();
                cardDeck.spread(); // update card table
            }

            /*This function doDrawCard the cards with DrawCard
              @params : ,
              @return :  To draw a card from the deck,
              @author :  surendra*/

            var doDrawCard = function(){
                var c = cardDeck.draw();
                if(!c){
                    showError('no more cards');
                    return;
                }
                hand[hand.length] = c;
                cardDeck.spread();
                showHand();
            }

            
            /*This function doOrderByRank cards
              @params : ,
              @return :  To order the deck of cards by rank,
              @author :  surendra*/

            var doOrderByRank = function(){
                cardDeck.orderByRank();
                cardDeck.spread(); // update card table
            }

               /*This function doOrderBySuit the cards
              @params : ,
              @return :  To order the deck of cards by suit,
              @author :  surendra*/

            var doOrderBySuit = function(){
                cardDeck.orderBySuit();
                cardDeck.spread(); // update card table
            }

              /*This function displaycards the cards
              @params : ,
              @return :  display the card,
              @author :  surendra*/

            var displaycards = function(){ 
                cardDeck.spread();
                $("#cardDeck, #yourHand").show(); 

            }

            /*This function hidecards the cards
              @params : ,
              @return :  Cards Hide,
              @author :  surendra*/

             var hidecards = function(){
                $("#cardDeck, #yourHand").hide();                
            }

           

            $('#showcards').click(displaycards);
            $('#hide').click(hidecards);  
            $('#shuffler').click(doShuffle);
            $('#draw').click(doDrawCard);
            $('#shuffleDraw').click(function(){
                doShuffle();
                doDrawCard();
            });

            /*
            /* add card click function
            */

            $('#addCard').click(function(){
                if(!hand.length){
                    showError('your hand is empty');
                    return;
                }
                var c = hand.pop();
                showHand();
                cardDeck.addCard(c);
                cardDeck.spread();
            });
            
            $('#orderByRank').click(doOrderByRank);
            $('#orderBySuit').click(doOrderBySuit);

        });
 
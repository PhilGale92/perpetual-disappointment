var quotes = [
    'You can\’t make an omelette without breaking down in tears.',
    'No one likes a smart aleck but that\’s not the reason in your case.',
    'You snooze, you drool.',
    'A nod\’s as good as wink to someone you immediately realise you’ve mistaken for someone else.',
    'Another day, another net loss.',
    'When the going gets tough, tough.',
    'It\’s no use sobbing uncontrollably over spilt milk.',
    'Slide comes before a fall.',
    'It ain\’t what you do, it’s the grudging, half-hearted way you do it.',
    'Dance like nobody is pointing and laughing.',
    'The darkest part of night is just before the dawn of another pointless day.',
    'Get hayfever while the sun shines.',
    'Laughter is the best medicine but your condition is very serious.',
    'Every cloud has a silver lining around its heavy grey mass of imminent rain.',
    'A watched pot eventually boils over as you stare vacantly at the tiny bubbles.',
    'No news is increasingly worrying.',
    'Wake up and smell the super strength cider.',
    'Ask a silly question, get publicly shamed.',
    'You make your own incredibly bad luck.',
    'There’s  no ‘I’ in team but there’s ‘u’ in failure.',
    'There are plenty more fish in the vast, implacable ocean.',
    'You are what you stress eat.',
    'Just imagine how terrible it might have been if we’d been at all competent. ― Terry Pratchett, Good Omens',
    'TEAMWORK: A few harmless flakes working together can unleash an avalanche of destruction. ― Justin Sewell', 
    'Accept that you\'re just a product, not a gift.',
    'There are no stupid questions, but there are a LOT of inquisitive idiots. ― Justin Sewell',
    'You can do anything you set your mind to when you have vision, determination, and an endless supply of expendable labor. ― Justin Sewell',
    'Food for thought: Every dead body on Mount Everest was once a highly motivated person. Stay lazy my friends. It may save your life one day. ― Oliver Markus Malloy', 
    'The best defence is complete emotional withdrawal.',
    'What doesn\’t kill you makes you wish it had.',
    'Never do today what you might as well put off until tomorrow.',
    'You can lead a horse to water but that’s not really a LinkedIn skill.',
    'Everything happens for a terrifyingly random reason.',
    'Burn that bridge when you come to it.',
    'Despair springs eternal.',
    'If at first you don’t succeed, get used to it.',
    'When one door closes, another one opens in your face.',
    'Worse things happen at sea but this is as bad as land-based events go.',
    'When you wish upon a star, bear in mind it may already be dead and you’re wishing on the dying rays that have made their way, millions of years later, across the dark, indifferent void.',
    'Hip, hip… replacement!',
    'Same shit, different year.',
    'When a tree falls in the woods and no one is there to hear it, does that remind you of your life.',
    'If you can\'t learn to do it well, at least learn to do it badly.',
    'Only after the struggle is over will we know just how many of our sacrifices were completelt unnecessary.', 
    'Failure is not an option, it\'s your destiny.',
    'By the time justice is done, injustuice has usually gotten away with everything it wanted to.',
    'New paths will open before you as soon as you lower your expectations.',
    'Responsibility: water isn\'t the only thing that rolls downhill.',
    'By doing just a little bit everyday, you can gradually let the job completely overwhelm you.',
    'The sky is the limit, too bad you can\'t fly.',
    'Inside every snowflake is a perfectly unique meltdown just waiting to happen.',
    'Whan I was told I had to pull my weight around here, I didn\'t realise that included everyone else\'s.',
    'My reality isnt\'t getting any better, but my fantasies are improving all the time.',
    'Never stop trying to exceed your limits. We need the entertainment.',
    'Disaster awaits those who ignore hidden threats. We trust you\'ll find this sufficiently motivating.',
    'Just because we accept you as you are doesn\'t mean we\'ve abandoned hope you\'ll improve.',
    'Just because you\'ve always done it that way doesn\'t mean it\'s incredibly stupid.',
    'Multitasking: the art of doing twice as much as you should, half as well as you could.',
    'You aren\'t being paid to believe in the power of your dreams.',
    
    // custom ones!
    'I\'d say "sweet dreams", but there aren\'t any left',

    
];

function newQuote () {
  var randomNumber = Math.floor (Math.random()* (quotes.length));
  document.getElementById('quote').innerHTML = quotes [randomNumber];
}

import Question from '../types/Question.js';

export default class Questions {
  // Map of all Questions
  public static readonly questionsEN: Map<string, Question> = new Map<string, Question>([
    ['question0',
      new Question('I am in the middle of a chat session and someone says something really mean. Should I:',
        ['Say something mean back?', 'Ask them to Apologize?', 'Do not respond, Tell an adult if it bothers me'],
        2, 'Correct', 'Wrong',
        'As you apparently know, you should never respond to any messages that are mean or in any way makes you feel uncomfortable. It is not your fault if you get a message like that. If you get a message like this, tell your parents right away.')],

    ['question1',
      new Question('I am online and I got a message from my Internet service provider asking for my password. They say they need it to fix my account. Should I give it to them?',
        ['Yes.', 'No.'],
        1, 'Correct', 'Wrong',
        'Internet service providers would never ask you for a password. You should never share your Internet password to anyone (even your best friends) other than your parents.')],

    ['question2',
      new Question('I met someone in a chat room who wants to get together. They live nearby.  Can I arrange a meeting? ',
        ['Yes', 'No'],
        1, 'Correct', 'Wrong',
        'It is very important that you never agree to get together with someone you meet online without first checking with my parents. You never truly know who this person really is and can end up very dangerous. ')],

    ['question3',
      new Question('If someone bullies you online what would be the best thing to do?',
        ['Do not respondand tell your parents', 'Respond with something mean too', 'Respond, but in a nice way'],
        0, 'Correct', 'Wrong',
        'Stay calm and do not feed the bully. Sometimes the bullies just want you to freak out and retaliate so that they can make more fun of your reaction. Even if you say something nice, they can still find a way to be mean to you. But if you do not respond the bullies get bored.')],

    ['question4',
      new Question('What should you do if a stranger asks you to send a picture of yourself to them?',
        ['Do not send any pictures and tell an adult', 'Send the picture if you think you know them', 'Send picture even though they are a stranger', 'Ignore it'],
        0, 'Correct', 'Wrong',
        'You should never send pictures of yourself to a stranger as you do not know who they are or what they might do. If a stranger asks for a picture, refuse and tell an adult straight away. You should also never send a picture to somebody that you would not want anybody else to see. Even if you trust the person, it could still end up online or be shown to others.')],

    ['question5',
      new Question('From whom should you accept friend requests?',
        ['Anyone.', 'A friend of a friend.', 'Only from people you definitely know.'],
        2, 'Correct', 'Wrong',
        'You should only accept a friend request from people who you definitely know. Never accept friend requests from strangers or anybody you are unsure of.')],

    ['question6',
      new Question('If you post something on the internet, who may be able to see it? ',
        ['Only your friends.', 'Just yourself', 'Anyone', 'Only your family'],
        2, 'Correct', 'Wrong',
        'Anybody may be able to see what you post online. Speak to an adult and ask them to help you improve your online privacy.')],

    ['question7',
      new Question('Someone in your class has sent around an embarrassing photo of another classmate. What should you do with it? ',
        ['Show your teacher', 'Forward the photo onto other people', 'Save it to your phone', 'Laugh at the photo with your friends'],
        0, 'Correct', 'Wrong',
        'You should show your teacher the photo and tell them what has happened. Think about how you would feel if the picture was of you.')],

    ['question8',
      new Question('One of your friends has posted a video of you on the internet and you do not like it. You have asked them to take it down, but they have said no because it is funny. What should you do? ',
        ['Keep asking your friend until they take it down', 'Speak to an adult', 'Leave it', 'Post a video of them to get revenge.'],
        1, 'Correct', 'Wrong',
        'You should speak to an adult about what has happened and tell them that you do not like it. They can then try to get the video taken down. ')],

    ['question9',
      new Question('Your friend tells you that she is talking to a boy online and she is going to meet him on the weekend. What should you do?',
        ['Volunteer to go with her ', 'Let her go on her own ', 'Tell an adult', 'Tell your other friends'],
        2, 'Correct', 'Wrong',
        'You must tell an adult straight away if somebody going to meet a person that they met online and have never met in person before. You should never meet people unless you know who they are for certain. ')],

    ['question10',
      new Question('A classmate tells you that somebody has been calling him mean names on an online game. What should you do?',
        ['Tell your teacher or adult', 'Tell him to get revenge', 'Tell him to just ignore it', 'Tell him to stop playing games for a while'],
        0, 'Correct', 'Wrong',
        'Calling somebody mean names online is cyberbullying. You should tell an adult about it and not ignore it. ')],

    ['question11',
      new Question('Who can you share your passwords with? ',
        ['Your friends ', 'Nobody', 'Your family ', 'Your teacher '],
        1, 'Correct', 'Wrong',
        'You should always keep your passwords to yourself. It could be dangerous if your password fell into the wrong hands ')],

    ['question12',
      new Question('You have gone on a gaming website, and it asks you to download a link before you play. What should you do? ',
        ['Show the link to an adult', 'Download it anyway ', 'Do not download it', 'Ask your friends what to do '],
        0, 'Correct', 'Wrong',
        'You should always speak to an adult if a website asks you to download something. You never know what it could be. ')],

    ['question13',
      new Question('You need to create a password for a website. What should you use?',
        ['jacksmith', 'jack123', '1cer3am! ', 'jumpingjacks '],
        2, 'Correct', 'Wrong',
        'The strongest passwords have a combination of letters, numbers and punctuation. You should never use anything linked to your name because it is very easy to guess. ')],

    ['question14',
      new Question('Sometimes you will see https:// or a lock symbol in front a web address. What does that mean? ',
        ['I can not access the website ', 'The website needs a password ', 'It is not a kid friendly website', 'It is safer to enter personal information'],
        3, 'Correct', 'Wrong',
        'https:// or the lock symbol that is displayed sometimes in front of the web address implies that the website is safer.  It does not have to be in front of every website but if you enter personal information, you should make sure it is secured with https://.  ')],

    ['question15',
      new Question('You receive a new friend request from a person who does not have a profile picture, but you recognize the name as someone in your class. You:',
        ['Delete it because you are to cool for friends', ' Accept it right away', 'Ask the classmate to prove they sent the request', 'Send them a message asking who they are'],
        2, 'Correct', 'Wrong',
        'Be careful about who you add as a friend on any social media account. When you add a friend online they can access a lot of your personal information, including all your posted pictures. Remember to double check that the person you are adding is who they say they are. ')]]);

  public static readonly questionsNL: Map<string, Question> = new Map<string, Question>([
    ['question0',
      new Question('Ik zit midden in een chat gesprek/sessie, iemand zegt iets heel gemeen. Wat moet ik doen: "?',
        ['Iets vervelend terug zeggen?', 'Hem vragen zich te verontschuldigen?', 'Niet reageren'],
        2, 'Correct', 'Wrong',
        'Zoals misschien wel duidelijk is, moet je natuurlijk nooit reageren op berichten die gemeen of kwetsend bedoeld zijn en je in welke manier dan ook ongemakkelijk laten voelen. Het is niet jouw fout dat je zon bericht krijgt. Als je een bericht zoals dit krijgt, vertel dit dan meteen aan je ouders.')],

    ['question1',
      new Question('Ik ben online op het internet en ik krijg een bericht van de internet provider die vraagt naar mijn wachtwoord. De internetprovider zegt dat dit nodig is om mijn account te fiksen. Moet ik mijn wachtwoord geven? ',
        ['Ja', 'Nee'],
        1, 'Correct', 'Verkeerd',
        'Je moet nooit je (internet) wachtwoord geven aan iemand (zelfs niet je beste vrienden), alleen je ouders. KPN en de meeste andere internet providers zullen je nooit vragen om je wachtwoord. Soms zullen mensen zich voordoen als internet provider en je op deze manier aan je wachtwoord proberen te komen. ')],

    ['question2',
      new Question('Ik heb iemand ontmoet in een chatroom, deze persoon wil afspreken. Hij/zij woont dichtbij kan ik een afspreken? ',
        ['Ja', 'Nee'],
        1, 'Correct', 'Verkeerd',
        'Het is heel belangrijk dat je nooit ja zegt als een persoon met je wilt afspreken als deze online hebt ontmoet. Check dit altijd eerst bij je ouders. Als je ouders de afspraak goed vinden, zorg dat deze dan plaatsvind op een drukke plek met een ouder erbij om een oogje in het zeil te houden.')],

    ['question3',
      new Question('Als iemand je online pest, hoe reageer je daar het best op?',
        ['Niet reageren', 'Reageren met iets gemeens', 'Reageer, maar op een vriendelijke manier'],
        0, 'Correct', 'Verkeerd',
        'Je zou niet moeten reageren. Als iemand je pest, probeer je jezelf voor te stellen dat je reactie precies is wat een pestkop wil. Het geeft hem/haar de macht over jouw. En wie wil nou de macht geven aan de pestkop?')],

    ['question4',
      new Question('Wat doe je als een vreemde vraagt of je een foto van jezelf doorstuurt?',
        ['Geen photos sturen, en meteen vertellen aan je ouders', 'Stuur de foto zelfs als het een vreemde is', 'Negeer het bericht'],
        0, 'Correct', 'Verkeerd',
        'Je moet nooit photos maken van jezelf en naar vreemden sturen. J weet namelijk niet wie ze zijn en wat ze misschien van plan zijn. Als een vreemde vraagt voor een foto, weiger dit en vertel het een volwassenen dit meteen. Je moet nooit een foto sturen die niet door iemand anders gezien mag worden, zelfs als je deze persoon helemaal vertrouwt. Dit kan namelijk nog steeds bij vreemden terecht komen.')],

    ['question5',
      new Question('Van wie moet je online vriendschapsverzoeken accepteren?',
        ['Iedereen', 'Een vriend van een vriend', 'Iemand die je denkt eerder te hebben ontmoet', 'Alleen van mensen die je kent'],
        2, 'Correct', 'Verkeerd',
        'Accepteer alleen vriendschapsverzoeken van mensen die je kent. Accepteer nooit vriendschapsverzoeken van vreemden of iemand die je niet met zekerheid kent.')],

    ['question6',
      new Question('Als je iets op internet plaatst, wie kan het dan zien?',
        ['Alleen je vrienden', 'Alleen jij', 'Iedereeen', 'Alleen je familie'],
        2, 'Correct', 'Verkeerd',
        'Het kan zijn dat iedereen kan zien wat je online plaatst. Praat met een volwassene erover en vraag ze om jou te helpen met je privacyinstellingen.')],

    ['question7',
      new Question('Iemand in je klas heeft een gênante foto van een andere klasgenoot rondgestuurd. Wat moet je doen?',
        ['Laat het aan de leraar zien en vertel wat er is gebeurd', 'Stuur de foto door naar andere mensen', 'Bewaar het op je telefoon zodat je ze later voorschut kan zetten'],
        0, 'Correct', 'Verkeerd',
        'Je moet je leraar de foto laten zien en vertellen wat er is gebeurd. Bedenk hoe je je zou voelen als de foto van jou was.')],

    ['question8',
      new Question('Een van je vrienden heeft een video van je op internet geplaatst en je vindt het niet leuk. Je hebt ze gevraagd om het te verwijderen, maar ze willen het niet doen omdat het grappig is. Wat moet je doen?',
        ['Blijf vragen tot je vriend/vriendin de video verwijdert', 'Praat er met een volwassene over', 'Gewoon laten doen- je kunt er niets anders aan doen', 'Plaats een video van hen om ze terug te krijgen'],
        1, 'Correct', 'Verkeerd',
        'Je moet met een volwassene praten over wat er is gebeurd en hem vertellen dat je het niet leuk vindt. Ze kunnen dan proberen de video te verwijderen.')],

    ['question9',
      new Question('Je vriendin vertelt je dat ze online met een jongen praat en dat ze hem in het weekend gaat ontmoeten. Wat ga je doen?',
        ['Vrijwillig met haar mee gaan', 'Laat haar alleen gaan', 'Vertel het meteen aan een volwassene', 'Vertel het je andere vrienden'],
        2, 'Correct', 'Verkeerd',
        'Je moet het meteen aan een volwassene vertellen als iemand een persoon gaat ontmoeten die hij of zij online heeft ontmoet. Je moet nooit mensen ontmoeten, tenzij je zeker weet wie ze zijn.')],

    ['question10',
      new Question('Een klasgenoot vertelt je dat iemand hem gemene namen heeft genoemd in een online game. Wat zou je moeten doen?',
        ['Vertel het je leraar of een andere volwassene', 'Zeg hem dat hij de persoon gemene namen terug moet bellen', 'Zeg hem dat hij het gewoon moet negeren'],
        0, 'Correct', 'Verkeerd',
        'Iemand online gemene namen noemen, is cyberpesten. Je moet het aan een volwassene vertellen en het niet negeren. ')],

    ['question11',
      new Question('Met wie kunt u uw wachtwoorden delen? ',
        ['Je vrienden ', 'Niemand - je moet ze voor jezelf houden', 'Jouw familie ', 'je leraar'],
        1, 'Correct', 'Verkeerd',
        'U moet uw wachtwoorden altijd voor uzelf houden. Het kan gevaarlijk zijn als uw wachtwoord in verkeerde handen valt')],

    ['question12',
      new Question('Je bent op een gaming-website geweest en deze vraagt je om een link te downloaden voordat je gaat spelen. Wat zou je moeten doen? ',
        ['Laat de link zien aan een volwassene', 'Download het toch', 'Download het niet, het moet illegaal zijn', 'Vraag je vrienden wat ze moeten doen'],
        0, 'Correct', 'Verkeerd',
        'Praat altijd met een volwassene als een website je vraagt iets te downloaden. Je weet nooit wat het kan zijn. ')],

    ['question13',
      new Question('U moet een wachtwoord voor een website aanmaken. Wat moet je gebruiken? ',
        ['jacksmith', 'jack123', '1cer3am! ', 'jumpingjacks',],
        2, 'Correct', 'Verkeerd',
        'De sterkste wachtwoorden hebben een combinatie van letters, cijfers en leestekens. Gebruik nooit iets dat aan uw naam is gekoppeld, omdat het heel gemakkelijk te raden is. ')],

    ['question14',
      new Question('Soms ziet u https:// of een slotsymbool voor een webadres. Wat betekent dat?',
        ['Ik heb geen toegang tot de website', 'De website heeft een wachtwoord nodig', 'Het is geen kindvriendelijke website', 'Het betekent dat het veiliger'],
        3, 'Correct', 'Verkeerd',
        'https:// of het slotsymbool dat soms voor het webadres wordt weergegeven, geeft aan dat de website veiliger is. Het hoeft niet voor elke website te staan, maar als u persoonlijke informatie invoert, moet u ervoor zorgen dat deze is beveiligd met https://.')],

    ['question15',
      new Question('Je ontvangt een nieuw vriendschapsverzoek van een persoon die geen profielfoto heeft, maar zo heet iemand ook uit jouw klas. U:',
        ['Verwijder het ', 'Accepteer het meteen', 'Overleg eerst met je klasgenoot', 'Stuur ze een bericht met de vraag wie ze zijn'],
        2, 'Correct', 'Verkeerd',
        'Wees voorzichtig met wie je toevoegt als vriend op social media. Wanneer je online een vriend toevoegt, hebben ze toegang tot veel van je persoonlijke gegevens, inclusief al je geposte fotos. Vergeet niet om te controleren of de persoon die u toevoegt, is wie hij zegt dat hij is.')]]);
}

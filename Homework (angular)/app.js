angular.module('App', [])

// Задание 1
.controller('AppController', function() {
  let people = this;
  people.list = [
    {name: 'Иванов Иван Иванович'},
    {name: 'Петров Петр Петрович'},
    {name: 'Алексеев Алексей Алексеевич'}
  ]
})

// Задание 2
.controller('MenuController', function() {
  let menu = this;

  menu.showSubmenu = function(item) {
    menu.isOpened = item
  }
  menu.hideSubmenu = function(item) {
    menu.isOpened = ''
  }
})

// Задание 3
.controller('PlayerController', function() {
  let players = this;

  players.list = [{
      "name": "Andriy Pyatov",
      "bio": "A former Vorskla Poltava apprentice, Pyatov joined Shakhtar Donetsk in 2007. He quickly became the club’s No1 and, from the start of the World Cup 2010 qualifiers, first choice in the national team too. He was error-prone at times in the past but is now much more likely to save the team than hinder them. Helped Shakhtar to this year’s Europe League semi-finals and has stayed loyal throughout their unsettled recent history, which has seen them move 800 miles to Lviv due to the fighting around their home city.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "No1 goalkeeper",
      "position": "Goalkeeper",
      "number": "",
      "caps": "65",
      "goals for country": "0",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "11/04/1996"
  }, {
      "name": "Denys Boyko",
      "bio": "The Dynamo Kyiv youth product became a key player at Dnipro. He moved to Turkish side Besiktas and was immediately put on the bench, giving him almost no chance to oust Andriy Pyatov in the national team. His Instagram site shows a love of travelling perhaps beyond the confines of your average footballer – he visited the Mayan ruins Chichen Itza, in Mexico, during the winter break.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Goalkeeper",
      "number": "",
      "caps": "4",
      "goals for country": "0",
      "club": "Besiktas",
      "league": "Süper Lig (Turkey)",
      "date_of_birth": "28/01/1988"
  }, {
      "name": "Mykyta Shevchenko",
      "bio": "A very talented goalkeeper, currently on loan at Ukrainian Premier League club Zorya Luhansk from Shakhtar. The 23-year-old had an impressive season at Zorya and has pedigree in the international set-up too, with three Under-21 caps and a number of appearances throughout the younger age groups.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Goalkeeper",
      "number": "",
      "caps": "0",
      "goals for country": "0",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "26/01/1993"
  }, {
      "name": "Vyacheslav Shevchuk",
      "bio": "Despite his age, Shevchuk has been a reliable left-back – and sometimes the national team’s only one – for many years. These days, though, the 37-year-old is lacking a little in match practice as he has lost his place in the Shakhtar side to the Brazilian Ismaily. He won his first cap in 2003 and has played more than 50 times for the national team now.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Defender",
      "number": "",
      "caps": "53",
      "goals for country": "0",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "13/05/1979"
  }, {
      "name": "Oleksandr Kucher",
      "bio": "An experienced and reliable central defender. His lack of speed was exposed last season though, leading to a large number of cards – and he was further punished for indiscipline in May when he was suspended for three games for his involvement in a fight during the match with bitter rivals Dynamo Kyiv. Kucher has won four league titles and was also a Uefa Cup winner with Shakhtar in 2009.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Defender",
      "number": "",
      "caps": "50",
      "goals for country": "2",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "22/10/1982"
  }, {
      "name": "Yevhen Khacheridi",
      "bio": "Khacheridi is undoubtedly Ukraine’s main central defender. While he previously caused himself and his teams problems with his explosive temperament, he has consigned those issues to the past. That has led to considerable interest from elsewhere in Europe and in January he was reported to have turned down a move to Everton in the hope of securing a move to a bigger club.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "Defensive mainstay",
      "position": "Defender",
      "number": "",
      "caps": "41",
      "goals for country": "3",
      "club": "Dynamo Kyiv",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "28/07/1987"
  }, {
      "name": "Yaroslav Rakitskyi",
      "bio": "Rakitskyi is likely to partner Khacheridi in the heart of the defence, although coach Mykhaylo Fomenko can also count on his partnership with Kucher – proven to be an effective combination with Shakhtar – if he wishes. His wife, Olga, is a well-known singer; Rakitskyi himself has been criticised in the past for a reluctance to flex his vocal cords, staying silent during the national anthem before games.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Defender",
      "number": "",
      "caps": "38",
      "goals for country": "4",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "03/08/1989"
  }, {
      "name": "Artem Fedetskyi",
      "bio": "A former right-sided midfielder, Fedetskyi was retrained as a right-back and has become the national team’s unquestionable first choice in that position – also shining domestically for Dnipro, who he joined from Shakhtar in 2012. Alternatives to him and Shevchuk are virtually nonexistent.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Defender",
      "number": "",
      "caps": "47",
      "goals for country": "2",
      "club": "Dnipro Dnipropetrovsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "26/04/1985"
  }, {
      "name": "Yevhen Konoplyanka",
      "bio": "Konoplyanka, scorer of a glorious goal against England at Wembley in 2012, will take his place on the left flank despite an up-and-down time at his club, Sevilla. At his best he is a direct and pacy winger with a superb long-range shot, and Ukraine’s attack would be seriously weakened without him. Before joining the La Liga side last summer he was linked strongly with a move to the Premier League but scoffed at the suggestion, saying: “If I was two and a half metres tall and didn’t know how to control a ball then I may have gone to England.”",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "Star man",
      "position": "Midfielder",
      "number": "",
      "caps": "52",
      "goals for country": "2",
      "club": "Sevilla",
      "league": "La Liga (Spain)",
      "date_of_birth": "29/09/1989"
  }, {
      "name": "Anatoliy Tymoshchuk",
      "bio": "Ukraine’s vastly-experienced captain, who now plays in Kazakhstan after a glittering career with Shakhtar, Bayern Munich and Zenit St Petersburg, is now seen more as an off-pitch leader. He certainly has a lot of advice to give, with almost 150 caps to his name. On the field, Fomenko now prefers other options. Tymoshchuk is the father of twins, who were born three months prematurely in 2010 but reached full health, and enjoys adding to his wine collection.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "Legend",
      "position": "Midfielder",
      "number": "",
      "caps": "142",
      "goals for country": "4",
      "club": "Kairat Almaty",
      "league": "Premier League (Kazakhstan)",
      "date_of_birth": "30/03/1979"
  }, {
      "name": "Ruslan Rotan",
      "bio": "Rotan is a master of free-kicks, which are one of the national team’s main weapons – and his gift was demonstrated at the highest level when he scored a fine set-piece for Dnipro against Sevilla in the 2015 Europa League final. Depending on the attributes of his partner, he can play as a defensive or attacking midfielder. Another very experienced player, he debuted for the national team back in 2003 and in May he became Dnipro’s record appearance maker when he entered the pitch for the 394th time against Volyn Lutsk. He will, however, leave the club this summer if a new contract is not agreed.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "Captain",
      "position": "Midfielder",
      "number": "",
      "caps": "87",
      "goals for country": "7",
      "club": "Dnipro Dnipropetrovsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "29/01/1981"
  }, {
      "name": "Andriy Yarmolenko",
      "bio": "Just as with Konoplyanka, the prospect of a Ukraine team without Yarmolenko is unthinkable. The powerful, versatile forward – a title winner in the last two seasons with Dynamo Kyiv – has been strongly linked with a move to Everton and could be one of several players to have switched clubs by the time Euro 2016 comes around. A £25m fee has been mentioned and his name is close to the top of various wish lists. Like Kucher, he landed himself in hot water during that stormy match between Dynamo and Shakhtar in May – kicking international team-mate Taras Stepanenko after he had celebrated in front of Dynamo’s fans, and receiving a red card.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "Main goalscorer",
      "position": "Forward",
      "number": "",
      "caps": "58",
      "goals for country": "24",
      "club": "Dynamo Kyiv",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "23/10/1989"
  }, {
      "name": "Taras Stepanenko",
      "bio": "Stepanenko is a key midfielder for both the national team and a Shakhtar side that enjoyed a superb run in this season’s Europa League. His place in the side is nailed on, although he has an unfortunate habit of picking up suspensions. He did not take kindly to that bust-up with Yarmolenko: “I’d like the whole country to know my friendship with Yarmolenko has ended,” he told the Shakhtar website afterwards. Presumably healing the rift between two key players will be one of Fomenko’s main pre-tournament priorities.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "Hard man",
      "position": "Midfielder",
      "number": "",
      "caps": "28",
      "goals for country": "2",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "08/08/1989"
  }, {
      "name": "Denys Harmash",
      "bio": "Harmash is one of Ukraine’s most talented players but not always the most reliable. He can be a real handful when at full tilt though, and the rangy six-footer impressed during last season’s Champions League for Dynamo Kyiv. He made his debut for the national team in October 2011 and could be his team’s key midfield force this summer.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Midfielder",
      "number": "",
      "caps": "26",
      "goals for country": "2",
      "club": "Dynamo Kyiv",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "19/04/1990"
  }, {
      "name": "Serhiy Sydorchuk",
      "bio": "Sydorchuk took advantage of an injury to Harmash to enjoy a hugely fruitful 2014-15 season for Dynamo. However, he has looked far less bright this year and should fear for his place. He can be a dominant presence in the centre at his best but has strong competition at his club from the impressive young midfielder Vitaliy Buyalsky. He had an influence in the Euro 2016 qualifiers, scoring against Belarus and Macedonia early in the campaign.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Midfielder",
      "number": "",
      "caps": "11",
      "goals for country": "2",
      "club": "Dynamo Kyiv",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "02/05/1991"
  }, {
      "name": "Viktor Kovalenko",
      "bio": "An extremely talented midfielder for Shakhtar and the Ukraine Under-21 side, Kovalenko has become a key player for his club since the departure of Alex Teixeira to China in February. He was called up to the national team straightaway for the friendly against Cyprus and Fomenko will hope he can replicate his performances in last summer’s Under-20 World Cup – when he scored a hat-trick against the United States en route to sharing the golden boot.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "Young talent",
      "position": "Midfielder",
      "number": "",
      "caps": "2",
      "goals for country": "0",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "14/02/1996"
  }, {
      "name": "Oleksandr Karavayev",
      "bio": "An alternative to Yarmolenko, but his attitude does not suggest he can reach those heights. In fact, Yarmolenko and Konoplyanka are irreplaceable; although Karavayev, a good performer as the latest in Zorya’s loanees from Shakhtar, is young enough to improve.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Midfielder",
      "number": "",
      "caps": "3",
      "goals for country": "0",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "02/06/1992"
  }, {
      "name": "Serhiy Rybalka",
      "bio": "A long-serving player for Dynamo – albeit having spent many years on loan, including a season at Czech side Slovan Liberec – Rybalka began as an attacking midfielder. When Sergei Rebrov was appointed head coach of Dynamo in 2014, he restored Rybalka to the team and converted him into a defensive midfielder with playmaking capabilities in the manner of Andrea Pirlo. Like the Italian, he is a master of free-kicks and his known for his impressive range of assists.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Midfielder",
      "number": "",
      "caps": "9",
      "goals for country": "0",
      "club": "Dynamo Kyiv",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "01/04/1990"
  }, {
      "name": "Oleksandr Zinchenko",
      "bio": "A very talented young player who can perform in any midfield position, Zinchenko left Shakhtar for Russia in search of regular football. He has played well for Ufa and Ukraine’s Under-21s, and has a good chance of featuring in France this summer. Zinchenko became Ukraine’s third-youngest international when he replaced Rotan towards the end of last year’s qualifying defeat against Spain; there have been suggestions, whether true or not, that Zinchenko was offered Russian citizenship and that this early debut was given to secure his international future. Scored in only his second appearance for the national team, becming Ukraine's youngest goalscorer at the age of 19 years and 214 days.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Midfielder",
      "number": "",
      "caps": "2",
      "goals for country": "1",
      "club": "FC Ufa",
      "league": "Premier League (Russia)",
      "date_of_birth": "15/12/1996"
  }, {
      "name": "Roman Zozulya",
      "bio": "Zozulya was the key striker in Ukraine’s World Cup qualifying campaign, scoring against France to help establish a 2-0 play-off lead that was agonisingly overturned. He was then laid low by a serious knee injury, sustained in a Euro 2016 qualifiers against Spain, and has only recently returned to football after seven months out. He immediately regained a place in the starting lineups of both Dnipro and, a little later, the national team. Fomenko obviously trusts Zozulya, a very hardworking player who will be the side’s main striker in France.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Forward",
      "number": "",
      "caps": "25",
      "goals for country": "4",
      "club": "Dnipro Dnipropetrovsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "17/11/1989"
  }, {
      "name": "Pylyp Budkivskyi",
      "bio": "Budkivskyi is still considered a young striker in Ukraine, although he is actually 24 and needs to kick on now. He has done well during two loan seasons with Zorya, but has rarely been able to show his ability in the national team.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Forward",
      "number": "",
      "caps": "6",
      "goals for country": "0",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "10/03/1992"
  }, {
      "name": "Yevhen Seleznyov",
      "bio": "During the winter he moved from Dnipro to middling Russian side Kuban Krasnodar. It was certainly a favourable switch money-wise but questionable from most other points of view – and he subsequently lost his place in the national team.",
      "photo done?": "yes",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Forward",
      "number": "",
      "caps": "49",
      "goals for country": "11",
      "club": "FC Krasnodar",
      "league": "Premier League (Russia)",
      "date_of_birth": "20/07/1985"
  }, {
      "name": "Bohdan Butko",
      "bio": "A player who has been with Shakhtar Donetsk since 2004 but has yet to play for them as he has spent most of his career out on loan. ",
      "photo done?": "no",
      "special player? (eg. key player, promising talent, etc)": "",
      "position": "Defender",
      "number": "",
      "caps": "16",
      "goals for country": "0",
      "club": "Shakhtar Donetsk",
      "league": "Premier League (Ukraine)",
      "date_of_birth": "13/01/1991"
  }]
});

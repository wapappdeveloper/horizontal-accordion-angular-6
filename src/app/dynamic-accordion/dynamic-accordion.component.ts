/**
 * @description
 * Please modify the open and close state width in animation from the console
 * Developed by lional.J.
 * To modify or update this please contact lional.arokiaraj@srkay.com
 * Code created date:14/Sep/2018
 * Code updated date:14/Sep/2018
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-accordion',
  templateUrl: './dynamic-accordion.component.html',
  styleUrls: ['./dynamic-accordion.component.scss'],
  animations: [
    trigger('menuSlider', [
      state('open', style({
        width: '662px',//Please add the accordionAnimationWidth 
      })),
      state('close', style({
        width: '60px',//Please add the accordionBarWidth 
      })),
      transition('open => close', animate('600ms ease-in-out')),
      transition('close => open', animate('600ms ease-in-out')),
    ]),
  ]
})

export class DynamicAccordionComponent implements OnInit {
  @Input('param') param: any = null;
  @Output('emitter') private emitter: EventEmitter<any> = new EventEmitter();

  string1: any = 'Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character  was created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don  Heck  and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963),  and  received his own title in Iron Man #1 (May 1968).  A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a  severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass  destruction, he instead creates a powered suit of armor to save his life and escape captivity. Later, Stark  develops his suit, adding weapons and other technological devices he designed through his company, Stark  Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first  concealing his true identity, Stark eventually declared that he was, in fact, Iron Man in a public  announcement.  Initially, Iron Man was a vehicle for Stan Lee to explore Cold War themes, particularly the role of American  technology and industry in the fight against communism. Subsequent re-imaginings of Iron Man have  transitioned from Cold War motifs to contemporary matters of the time.  Throughout most of the characters publication history, Iron Man has been a founding member of the superhero  team the Avengers and has been featured in several incarnations of his own various comic book series. Iron  Man  has been adapted for several animated TV shows and films. The character is portrayed by Robert Downey Jr. in  the live action film Iron Man (2008), which was a critical and box office success. Downey, who received much  acclaim for his performance, reprised the role in a cameo in The Incredible Hulk (2008), two Iron Man sequels  Iron Man 2 (2010) and Iron Man 3 (2013), The Avengers (2012), Avengers: Age of Ultron (2015), Captain  America:  Civil War (2016), Spider-Man: Homecoming (2017), Avengers: Infinity War (2018) and will do so again in its  untitled sequel (2019) in the Marvel Cinematic Universe.  Iron Man was ranked 12th on IGNs "Top 100 Comic Book Heroes" in 2011, and third in their list of "The Top  50 Avengers" in 2012.  Iron Mans Marvel Comics premiere in Tales of Suspense #39 (cover dated March 1963) was a collaboration among  editor and story-plotter Stan Lee, scripter Larry Lieber, story-artist Don Heck, and cover-artist and  character-designer Jack Kirby. In 1963, Lee had been toying with the idea of a businessman superhero. He  wanted to create the "quintessential capitalist", a character that would go against the spirit of the times  and  Marvels readership. Lee said,  I think I gave myself a dare. It was the height of the Cold War. The readers, the young readers, if there was  one thing they hated, it was war, it was the military....So I got a hero who represented that to the  hundredth  degree. He was a weapons manufacturer, he was providing weapons for the Army, he was rich, he was an  industrialist....I thought it would be fun to take the kind of character that nobody would like, none of our  readers would like, and shove him down their throats and make them like him....And he became very popular.  He set out to make the new character a wealthy, glamorous ladies man, but one with a secret that would  plague  and torment him as well. Writer Gerry Conway said, "Here you have this character, who on the outside is  invulnerable, I mean, just cant be touched, but inside is a wounded figure. Stan made it very much an  in-your-face wound, you know, his heart was broken, you know, literally broken. But theres a metaphor going  on  there. And thats, I think, what made that character interesting." Lee based this playboys looks and  personality on Howard Hughes, explaining, "Howard Hughes was one of the most colorful men of our time. He  was an inventor, an adventurer, a multi-billionaire, a ladies man and finally a nutcase.""Without being  crazy, he was Howard Hughes," Lee said.  While Lee intended to write the story himself,a minor deadline emergency eventually forced him to hand  over the premiere issue to Lieber, who fleshed out the story. The art was split between Kirby and Heck. "He  designed the costume," Heck said of Kirby, "because he was doing the cover. The covers were always done  first.  But I created the look of the characters, like Tony Stark and his secretary Pepper Potts."In a 1990  interview, when asked if he had "a specific model for Tony Stark and the other characters?", Heck replied  "No,  I would be thinking more along the lines of some characters I like, which would be the same kind of  characters  that Alex Toth liked, which was an Errol Flynn type."Iron Man first appeared in 13- to 18-page stories in  Tales of Suspense, which featured anthology science fiction and supernatural stories. The characters  original  costume was a bulky gray armored suit, replaced by a golden version in the second story (issue #40, April  1963). It was redesigned as sleeker, red-and-golden armor in issue #48 (Dec. 1963) by that issues interior  artist, Steve Ditko, although Kirby drew it on the cover. As Heck recalled in 1985, " second costume, the  red and yellow one, was designed by Steve Ditko. I found it easier than drawing that bulky old thing. The  earlier design, the robot-looking one, was more Kirbyish."  In his premiere, Iron Man was an anti-communist hero, defeating various Vietnamese agents. Lee later  regretted  this early focus. Throughout the characters comic book series, technological advancement and national  defense were constant themes for Iron Man, but later issues developed Stark into a more complex and  vulnerable  character as they depicted his battle with alcoholism(as in the "Demon in a Bottle" storyline) and other  personal difficulties.From issue #59(Nov. 1964) to its final issue #99(March 1968), the anthological science - fiction backup  stories in Tales of Suspense were replaced by a feature starring the superhero Captain America.Lee and Heck  introduced  several adversaries for the character including the Mandarin in issue #50(Feb. 1964), the Black Widow in  #52(April 1964) and Hawkeye five issues later.Lee said that "of all the comic books we published at Marvel, we got more fan mail for Iron Man from women, from females, than any other title....We didnt get much fan mail from girls, but whenever we did, the letter  was usually addressed to Iron Man."  Lee and Kirby included Iron Man in The Avengers #1(Sept. 1963) as a founding member of the superhero team.The  character has since appeared in every subsequent volume of the series.Writers have updated the war and locale in which Stark is injured.In the original 1963 story, it was the  Vietnam War.In the 1990s, it was updated to be the first Gulf War, and in the 2000s updated again to be  the war in Afghanistan.Starks time with the Asian Nobel Prize-winning scientist Ho Yinsen is consistent  through nearly all incarnations of the Iron Man origin, depicting Stark and Yinsen building the original  armor  together. One exception is the direct-to-DVD animated feature film The Invincible Iron Man, in which the  armor  Stark uses to escape his captors is not the first Iron Man suit.';
  string2: any = 'designed through his company, Stark  Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first  concealing his true identity, Stark eventually declared that he was, in fact, Iron Man in a public  announcement.  Initially, Iron Man was a vehicle for Stan Lee to explore Cold War themes, particularly the role of American  technology and industry in the fight against communism. Subsequent re-imaginings of Iron Man have  transitioned from Cold War motifs to contemporary matters of the time.  Throughout most of the characters publication history, Iron Man has been a founding member of the superhero  team the Avengers and has been featured in several incarnations of his own various comic book series. Iron  Man  has been adapted for several animated TV shows and films. The character is portrayed by Robert Downey Jr. in  the live action film Iron Man (2008), which was a critical and box office success. Downey, who received much  acclaim for his performance, reprised the role in a cameo in The Incredible Hulk (2008), two Iron Man sequels  Iron Man 2 (2010) and Iron Man 3 (2013), The Avengers (2012), Avengers: Age of Ultron (2015), Captain  America:  Civil War (2016), Spider-Man: Homecoming (2017), Avengers: Infinity War (2018) and will do so again in its  untitled sequel (2019) in the Marvel Cinematic Universe.  Iron Man was ranked 12th on IGNs "Top 100 Comic Book Heroes" in 2011, and third in their list of "The Top  50 Avengers" in 2012.  Iron Mans Marvel Comics premiere in Tales of Suspense #39 (cover dated March 1963) was a collaboration among  editor and story-plotter Stan Lee, scripter Larry Lieber, story-artist Don Heck, and cover-artist and  character-designer Jack Kirby. In 1963, Lee had been toying with the idea of a businessman superhero. He  wanted to create the "quintessential capitalist", a character that would go against the spirit of the times  and  Marvels readership. Lee said,  I think I gave myself a dare. It was the height of the Cold War. The readers, the young readers, if there was  one thing they hated, it was war, it was the military....So I got a hero who represented that to the  hundredth  degree. He was a weapons manufacturer, he was providing weapons for the Army, he was rich, he was an  industrialist....I thought it would be fun to take the kind of character that nobody would like, none of our  readers would like, and shove him down their throats and make them like him....And he became very popular.  He set out to make the new character a wealthy, glamorous ladies man, but one with a secret that would  plague  and torment him as well. Writer Gerry Conway said, "Here you have this character, who on the outside is  invulnerable, I mean, just cant be touched, but inside is a wounded figure. Stan made it very much an  in-your-face wound, you know, his heart was broken, you know, literally broken. But theres a metaphor going  on  there. And thats, I think, what made that character interesting." Lee based this playboys looks and  personality on Howard Hughes, explaining, "Howard Hughes was one of the most colorful men of our time. He  was an inventor, an adventurer, a multi-billionaire, a ladies man and finally a nutcase.""Without being  crazy, he was Howard Hughes," Lee said.  While Lee intended to write the story himself,a minor deadline emergency eventually forced him to hand  over the premiere issue to Lieber, who fleshed out the story. The art was split between Kirby and Heck. "He  designed the costume," Heck said of Kirby, "because he was doing the cover. The covers were always done  first.  But I created the look of the characters, like Tony Stark and his secretary Pepper Potts."In a 1990  interview, when asked if he had "a specific model for Tony Stark and the other characters?", Heck replied  "No,  I would be thinking more along the lines of some characters I like, which would be the same kind of  characters  that Alex Toth liked, which was an Errol Flynn type."Iron Man first appeared in 13- to 18-page stories in  Tales of Suspense, which featured anthology science fiction and supernatural stories. The characters  original  costume was a bulky gray armored suit, replaced by a golden version in the second story (issue #40, April  1963). It was redesigned as sleeker, red-and-golden armor in issue #48 (Dec. 1963) by that issues interior  artist, Steve Ditko, although Kirby drew it on the cover. As Heck recalled in 1985, " second costume, the  red and yellow one, was designed by Steve Ditko. I found it easier than drawing that bulky old thing. The  earlier design, the robot-looking one, was more Kirbyish."  In his premiere, Iron Man was an anti-communist hero, defeating various Vietnamese agents. Lee later  regretted  this early focus. Throughout the characters comic book series, technological advancement and national  defense were constant themes for Iron Man, but later issues developed Stark into a more complex and  vulnerable  character as they depicted his battle with alcoholism(as in the "Demon in a Bottle" storyline) and other  personal difficulties.From issue #59(Nov. 1964) to its final issue #99(March 1968), the anthological science - fiction backup  stories in Tales of Suspense were replaced by a feature starring the superhero Captain America.Lee and Heck  introduced  several adversaries for the character including the Mandarin in issue #50(Feb. 1964), the Black Widow in  #52(April 1964) and Hawkeye five issues later.Lee said that "of all the comic books we published at Marvel, we got more fan mail for Iron Man from women, from females, than any other title....We didnt get much fan mail from girls, but whenever we did, the letter  was usually addressed to Iron Man."  Lee and Kirby included Iron Man in The Avengers #1(Sept. 1963) as a founding member of the superhero team.The  character has since appeared in every subsequent volume of the series.Writers have updated the war and locale in which Stark is injured.In the original 1963 story, it was the  Vietnam War.In the 1990s, it was updated to be the first Gulf War, and in the 2000s updated again to be  the war in Afghanistan.Starks time with the Asian Nobel Prize-winning scientist Ho Yinsen is consistent  through nearly all incarnations of the Iron Man origin, depicting Stark and Yinsen building the original  armor  together. One exception is the direct-to-DVD animated feature film The Invincible Iron Man, in which the  armor  Stark uses to escape his captors is not the first Iron Man suit.';
  innerHTML1: any = `<div class="ng-tns-c2-11 ui-panel ui-widget ui-widget-content ui-corner-all" id="ui-panel-0" style="height: 100%;"><!----><div class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all ng-tns-c2-11 ng-star-inserted"><!----><span class="ui-panel-title ng-tns-c2-11 ng-star-inserted">Tasks</span><!----></div><div class="ui-panel-content-wrapper ng-trigger ng-trigger-panelContent" role="region" id="ui-panel-0-content" aria-hidden="false" aria-labelledby="ui-panel-0-label" style="opacity: 1;"><div class="ui-panel-content ui-widget-content"><ul class="task-list"><li><p-checkbox binary="true"><div class="ui-chkbox ui-widget"><div class="ui-helper-hidden-accessible"><input type="checkbox" name="undefined" value="undefined"></div><div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"><span class="ui-chkbox-icon ui-clickable"></span></div></div><!----></p-checkbox><span class="task-name">Sales reports</span><button icon="fa fa-check" pbutton="" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"><span aria-hidden="true" class="ui-button-icon-left ui-clickable fa fa-check"></span><span class="ui-button-text ui-clickable">ui-btn</span></button></li><li><p-checkbox binary="true"><div class="ui-chkbox ui-widget"><div class="ui-helper-hidden-accessible"><input type="checkbox" name="undefined" value="undefined"></div><div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"><span class="ui-chkbox-icon ui-clickable"></span></div></div><!----></p-checkbox><span class="task-name">Pay the invoices</span><button icon="fa fa-check" pbutton="" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"><span aria-hidden="true" class="ui-button-icon-left ui-clickable fa fa-check"></span><span class="ui-button-text ui-clickable">ui-btn</span></button></li><li><p-checkbox binary="true"><div class="ui-chkbox ui-widget"><div class="ui-helper-hidden-accessible"><input type="checkbox" name="undefined" value="undefined"></div><div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"><span class="ui-chkbox-icon ui-clickable"></span></div></div><!----></p-checkbox><span class="task-name">Dinner with Tony</span><button icon="fa fa-check" pbutton="" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"><span aria-hidden="true" class="ui-button-icon-left ui-clickable fa fa-check"></span><span class="ui-button-text ui-clickable">ui-btn</span></button></li><li><p-checkbox binary="true"><div class="ui-chkbox ui-widget"><div class="ui-helper-hidden-accessible"><input type="checkbox" name="undefined" value="undefined"></div><div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"><span class="ui-chkbox-icon ui-clickable"></span></div></div><!----></p-checkbox><span class="task-name">Team meeting</span><button icon="fa fa-check" pbutton="" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"><span aria-hidden="true" class="ui-button-icon-left ui-clickable fa fa-check"></span><span class="ui-button-text ui-clickable">ui-btn</span></button></li><li><p-checkbox binary="true"><div class="ui-chkbox ui-widget"><div class="ui-helper-hidden-accessible"><input type="checkbox" name="undefined" value="undefined"></div><div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"><span class="ui-chkbox-icon ui-clickable"></span></div></div><!----></p-checkbox><span class="task-name">Plan the new theme</span><button icon="fa fa-check" pbutton="" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"><span aria-hidden="true" class="ui-button-icon-left ui-clickable fa fa-check"></span><span class="ui-button-text ui-clickable">ui-btn</span></button></li><li><p-checkbox binary="true"><div class="ui-chkbox ui-widget"><div class="ui-helper-hidden-accessible"><input type="checkbox" name="undefined" value="undefined"></div><div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"><span class="ui-chkbox-icon ui-clickable"></span></div></div><!----></p-checkbox><span class="task-name">Client meeting</span><button icon="fa fa-check" pbutton="" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"><span aria-hidden="true" class="ui-button-icon-left ui-clickable fa fa-check"></span><span class="ui-button-text ui-clickable">ui-btn</span></button></li></ul></div><!----></div></div>`;
  innerHTML2: any = `<div class="ng-tns-c2-12 ui-panel ui-widget ui-widget-content ui-corner-all" id="ui-panel-1" style="text-align: center; background: rgb(255, 255, 255); height: 100%;"><!----><div class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all ng-tns-c2-12 ng-star-inserted"><!----><span class="ui-panel-title ng-tns-c2-12 ng-star-inserted">Contact Us</span><!----></div><div class="ui-panel-content-wrapper ng-trigger ng-trigger-panelContent" role="region" id="ui-panel-1-content" aria-hidden="false" aria-labelledby="ui-panel-1-label" style="opacity: 1;"><div class="ui-panel-content ui-widget-content"><div class="ui-g"><div class="ui-g-12"><p-dropdown class="ng-tns-c3-13 ui-inputwrapper-filled ng-untouched ng-pristine ng-valid"><div class="ng-tns-c3-13 ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix"><!----><div class="ui-helper-hidden-accessible"><input class="ng-tns-c3-13" readonly="" role="listbox" type="text" aria-label="Select City"></div><!----><label class="ng-tns-c3-13 ui-dropdown-label ui-inputtext ui-corner-all ng-star-inserted" style=""><!----><!---->Select City<!----></label><!----><!----><!----><div class="ui-dropdown-trigger ui-state-default ui-corner-right"><span class="ui-dropdown-trigger-icon ui-clickable pi pi-caret-down"></span></div><!----></div></p-dropdown></div><div class="ui-g-12"><input id="name" pinputtext="" placeholder="Name" type="text" class="ui-inputtext ui-corner-all ui-state-default ui-widget"></div><div class="ui-g-12"><input id="age" pinputtext="" placeholder="Age" type="text" class="ui-inputtext ui-corner-all ui-state-default ui-widget"></div><div class="ui-g-12"><input id="message" pinputtext="" placeholder="Message" type="text" class="ui-inputtext ui-corner-all ui-state-default ui-widget"></div><div class="ui-g-12"><button icon="fa fa-send" label="Send" pbutton="" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left"><span aria-hidden="true" class="ui-button-icon-left ui-clickable fa fa-send"></span><span class="ui-button-text ui-clickable">Send</span></button></div></div></div><!----></div></div>`;

  value:any = '';
  
  accordionAnimationWidth: any;
  accordionBarWidthWithContent: Number;
  accordionBarModifiedHeight: Number;
  margin: any = 1;

  animationInProcess: boolean = false;

  defaultParam: any = {
    accordionTitle: 'Dynamic Accordion Demo',
    accordionTitleHeight: 40,
    accordionContainerWidth: 1000,
    accordionContainerHeight: 600,
    accordionBarWidth: 40,
    accordionBarHeight: null,
    accordionBarMargin: 3,
    accordionBarTitleTop: 200,
    accordionBarTitleLeft: 9,
    accordionData: [
      { tabName: 'Tab Name 1', id: 'tab1', content: this.string1, status: false, contentType:'text' },
      { tabName: 'Tab Name 2', id: 'tab2', content: this.innerHTML1, status: false, contentType:'html' },
      { tabName: 'Tab Name 3', id: 'tab3', content: this.string2, status: true, contentType:'text' },
      { tabName: 'Tab Name 4', id: 'tab4', content: this.innerHTML2, status: false, contentType:'html' },
      { tabName: 'Tab Name 5', id: 'tab5', content: this.string1, status: false, contentType:'text' },
      { tabName: 'Tab Name 6', id: 'tab6', content: this.innerHTML1, status: false, contentType:'html' },
      { tabName: 'Tab Name 1', id: 'tab7', content: this.string2, status: false, contentType:'text' },
      { tabName: 'Tab Name 2', id: 'tab8', content: this.innerHTML2, status: false, contentType:'html' },
      { tabName: 'Tab Name 3', id: 'tab9', content: this.string1, status: false, contentType:'text' },
      { tabName: 'Tab Name 4', id: 'tab10', content: this.innerHTML1, status: false, contentType:'html' },
      { tabName: 'Tab Name 5', id: 'tab11', content: this.string2, status: false, contentType:'text' },
      { tabName: 'Tab Name 6', id: 'tab12', content: this.innerHTML2, status: false, contentType:'html' }
    ],
    checkBox: true,
    checkBoxTop: 300,
    checkBoxLeft: 4
  }

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    if (this.param === null) {
      console.warn('accordion component using default object please pass dynamic object');
      this.param = this.defaultParam;
    } else {
      for (let x in this.defaultParam) {
        if (this.param[x] === undefined) {
          this.param[x] = this.defaultParam[x];
          console.log(this.param[x]);
        }
      }
    }
    let gotTrueStatus = true;
    for (let i = 0; i < this.param.accordionData.length; i++) {
      if (gotTrueStatus && this.param.accordionData[i].status) {
        gotTrueStatus = false;
        this.param.accordionData[i].status = true;
      } else {
        this.param.accordionData[i].status = false;
      }
    }
    this.param.accordionBarHeight = this.param.accordionBarHeight === null ? this.param.accordionContainerHeight - this.param.accordionTitleHeight : this.param.accordionBarHeight;

    let borderOfBarContainer = 2;
    this.param.accordionBarHeight = this.param.accordionBarHeight - borderOfBarContainer;
    this.accordionBarModifiedHeight = this.param.accordionBarHeight - this.param.accordionBarMargin * 2;

    let borderOfTitleBarContainer = 2;
    this.accordionAnimationWidth = (this.param.accordionContainerWidth - borderOfTitleBarContainer) - (this.param.accordionBarMargin * 2 * this.param.accordionData.length);
    this.accordionAnimationWidth = this.accordionAnimationWidth - (this.param.accordionBarWidth * (this.param.accordionData.length - 1));

    this.accordionBarWidthWithContent = this.accordionAnimationWidth - this.param.accordionBarWidth - this.margin * 2;
    console.log('open width =',this.accordionAnimationWidth, 'close width =',this.param.accordionBarWidth);
  }

  animationStart(event: any) {
    this.animationInProcess = true;
  }

  animationOver(event: any) {
    this.animationInProcess = false;
  }

  selectAccordionPanelTab(event, accordionData, item, id) {
    for (var i = 0; i < accordionData.length; i++) {
      accordionData[i].status = false;
    }
    item.status = true;
  }

  transform(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}

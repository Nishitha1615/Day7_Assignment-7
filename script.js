//Assignment 7(Day_7)

let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
xhr.onload=function(){
  if(xhr.status>=200 && xhr.status<300)
  {
    let obj=JSON.parse(this.response);
   

    for(i=0;i<obj.length;i++)
    {
      //Q1)Get all the countries from the Asia continent /region using the Filter function

      var countryregion=obj.filter(asiaregion=>asiaregion.region==="Asia");
      var Region=countryregion.map(asiaregion=>asiaregion.name)

      /*OUTPUT

        ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 
        'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 
        'Kyrgyzstan', "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 
        "Korea (Democratic People's Republic of)", 'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 
        'Singapore', 'Korea (Republic of)', 'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 
        'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']
      */

      //Q2) Get all the countries with a population of less than 2 lakhs using Filter function

      var Population=obj.filter(countrypopulation=>countrypopulation.population<200000);
      var Populationcountry=Population.map(countrypopulation=>countrypopulation.name)

      /*OUTPUT

      ['Åland Islands', 'American Samoa', 'Andorra', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Aruba', 'Bermuda', 'Bonaire, 
      Sint Eustatius and Saba', 'Bouvet Island', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 
      'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cayman Islands', 'Christmas Island', 'Cocos (Keeling) Islands', 'Cook Islands', 
      'Curaçao', 'Dominica', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'French Southern Territories', 'Gibraltar', 'Greenland', 
      'Grenada', 'Guam', 'Guernsey', 'Heard Island and McDonald Islands', 'Vatican City', 'Isle of Man', 'Jersey', 'Kiribati', 'Liechtenstein', 
      'Marshall Islands', 'Micronesia (Federated States of)', 'Monaco', 'Montserrat', 'Nauru', 'Niue', 'Norfolk Island', 
      'Northern Mariana Islands', 'Palau', 'Pitcairn', 'Saint Barthélemy', 'Saint Helena, Ascension and Tristan da Cunha', 
      'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 
      'Samoa', 'San Marino', 'Seychelles', 'Sint Maarten (Dutch part)', 'South Georgia and the South Sandwich Islands', 
      'Svalbard and Jan Mayen', 'Tokelau', 'Tonga', 'Turks and Caicos Islands', 'Tuvalu', 'Wallis and Futuna']

      */
    }
    
    console.log(Region)
    console.log(Populationcountry)
    
    //Q3) Print the following details name, capital, flag using forEach function

    obj.forEach(details=> {

      console.log(`
      Name: ${details.name}
      Capital: ${details.capital}
      Flags PNG: ${details.flags.png}
      Flags SVG: ${details.flags.svg} `)

      /* OUTPUT

       Name: Afghanistan
      Capital: Kabul
      Flags PNG: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
      Flags SVG: https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg 

      Name: Åland Islands
      Capital: Mariehamn
      Flags PNG: https://flagcdn.com/w320/ax.png
      Flags SVG: https://flagcdn.com/ax.svg 

      Name: Albania
      Capital: Tirana
      Flags PNG: https://flagcdn.com/w320/al.png
      Flags SVG: https://flagcdn.com/al.svg 

      Name: Algeria
      Capital: Algiers
      Flags PNG: https://flagcdn.com/w320/dz.png
      Flags SVG: https://flagcdn.com/dz.svg 

      Name: American Samoa
      Capital: Pago Pago
      Flags PNG: https://flagcdn.com/w320/as.png
      Flags SVG: https://flagcdn.com/as.svg 

      Name: Andorra
      Capital: Andorra la Vella
      Flags PNG: https://flagcdn.com/w320/ad.png
      Flags SVG: https://flagcdn.com/ad.svg 

      Name: Angola
      Capital: Luanda
      Flags PNG: https://flagcdn.com/w320/ao.png
      Flags SVG: https://flagcdn.com/ao.svg 

      Name: Anguilla
      Capital: The Valley
      Flags PNG: https://flagcdn.com/w320/ai.png
      Flags SVG: https://flagcdn.com/ai.svg 

      Name: Antarctica
      Capital: undefined
      Flags PNG: https://flagcdn.com/w320/aq.png
      Flags SVG: https://flagcdn.com/aq.svg 

      Name: Antigua and Barbuda
      Capital: Saint John's
      Flags PNG: https://flagcdn.com/w320/ag.png
      Flags SVG: https://flagcdn.com/ag.svg 

      Name: Argentina
      Capital: Buenos Aires
      Flags PNG: https://flagcdn.com/w320/ar.png
      Flags SVG: https://flagcdn.com/ar.svg 

      Name: Armenia
      Capital: Yerevan
      Flags PNG: https://flagcdn.com/w320/am.png
      Flags SVG: https://flagcdn.com/am.svg 

      Name: Aruba
      Capital: Oranjestad
      Flags PNG: https://flagcdn.com/w320/aw.png
      Flags SVG: https://flagcdn.com/aw.svg 

      Name: Australia
      Capital: Canberra
      Flags PNG: https://flagcdn.com/w320/au.png
      Flags SVG: https://flagcdn.com/au.svg 

      Name: Austria
      Capital: Vienna
      Flags PNG: https://flagcdn.com/w320/at.png
      Flags SVG: https://flagcdn.com/at.svg 

      */
      
    });

    //Q4) Print the total population of countries using reduce function
    
    let totalpopulation=obj.reduce((acc,curval)=>{
      return acc+curval.population;
    },0)
    console.log(`The total population of the countries are ${totalpopulation}`)
    
    /*OUTPUT

    The total population of the countries are 7759438109

    */
  }
}
xhr.send();


#include <math.h>
#include "City.h"
#include <iostream>

using namespace std;

const int num_city = 29;

// Initialization code

float total_pr_l = 0;
float total_pr_e = 0;
float total_wildcard = 0;


 city Cities[num_city] = {city(5.3,1.2,"Atlanta",10000),
							city(30.5,-91.1,"Baton Rouge",229493),
							city(30.4,-88.9,"Biloxi",44054),
							city(32.8,-79.9,"Charlete",731424),
							city(27.7,-97.4,"Corpus Christi",305215),
							city(29.8,-95.4,"Houston",2099451),
							city(30.3,-81.7,"Jacksonville",821784),
							city(24.5,-81.8,"Key West",24649),
							city(30.2,-92,"Lafayette",120623),
							city(25.8,-80.2,"Miami",399457),
							city(30.7,-88,"Mobile",195111),
							city(33.7,-78.9,"Myrtle Beach",27109),
							city(30,-90,"New Orleans",343829),
							city(28.4,-81.3,"Orlando",238300),
							city(30.2,-85.8,"Panama City Beach",12018),
							city(30.4,-87.2,"Pensacola",51923),
							city(32,-81,"Savannah",136286),
							city(30.5,-84.3,"Tallahassee",181376),
							city(27.9,-82.5,"Tampa",335709),
							city(33.8,-84.4,"Atlanta",420003),
							city(32.6,-85.5,"Auburn",53380),
							city(33.5,-86.8,"Birmingham",212237),
							city(35,-85.3,"Chattanooga",6346105),
							city(32.8,-96.8,"Dallas",1197816),
							city(34.7,-86.6,"Hunstville",180105),
							city(34.7,-92.3,"Little Rock",2915918),
							city(32.4,-86.3,"Montgomery",205764),
							city(36.2,-86.8,"Nashville",6346105),
							city(29.4,-98.5,"San Antonio",1327407)
};






int main()
{


	cout << Cities[1].get_lat() << ends << Cities[1].get_lon() << ends << Cities[1].get_name() << ends << Cities[1].get_population() << endl;

	hurricane huri = hurricane(30.7,-88.0, 100 ,hurricane::cat5);
	total_pr_l = 0;
	total_wildcard = 0;
	
	cout << huri.get_lat() << ends << huri.get_lon() << ends << huri.get_catagory() << endl;


	// Calculate the 
	for(int i=0;i<num_city;i++)
	{
		Cities[i].calc_max_pop_rate(true);
		Cities[i].calc_pop_rate_l(huri);
		//cout << Cities[i].get_pop_rate_l() << endl;
		total_pr_l += Cities[i].get_pop_rate_l(); 
		total_wildcard += Cities[i].get_wildcard();
	}

	//cout << total_pr_l << endl;
	cout << endl << total_wildcard << endl << endl;
    
	for(int j=0;j<num_city;j++)
	{Cities[j].calc_perc_enterers(total_wildcard);
	Cities[j].calc_pop_rate(total_pr_l);
	//cout << Cities[j].get_pop_rate() << endl;
	}
	


	
   system("pause");



}
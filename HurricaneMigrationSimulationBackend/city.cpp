#include <math.h>
#include <iostream>
#include "City.h"


city::city(float a, float b)
{

	lat = a;
	lon = b;




}


city::city(float a, float b, std::string label, int pop)
{
	lat = a;
	lon = b;
	name = label;
	population = pop;
}

city::city(float lati, float longi, std::string label,int pop, city_type type, rel_income income, rel_popsize pop_type,rel_seafloor height)
{
	lat = lati;
	lon = longi;
	name = label;
	type = orien;
	wealth = income;
	pop_type = population_type;
	sea_height = height;
	population = pop;

    

}

float city::get_pop_rate()
{
	return pop_rate;
}

float city::get_wildcard()
{
	return wildcard;
}


void city::calc_max_pop_rate(bool timescale)
{
	
	
	// Calculate maximum population rate for leaving



    float pop_rate_entering, pop_rate_leaving;


	
	if(timescale == true) //If long term timescale (longterm migrations)
	{

	   max_pop_rate = population  * .30; // Calculate the max_pop_rate from each city as a function of the maximum population, sea high, Baselined at 30% of the population migrating
	   
	}

	else // If short term time scale (evacuations)
	{
       max_pop_rate = population  * .85; 
	}

	
}

float city::get_pop_rate_l()
{
	return pop_rate_l;
}


void city::calc_pop_rate_l(hurricane storm)
{
	float distance = sqrt(pow((storm.get_lat() - lat),2) + pow((storm.get_lon() - lon),2)); //calculate the distance between the hurricane and the city.
	//std::cout << std::endl << distance << std::endl;
	//std::cout << std::endl <<storm.get_size();
	float damage = (distance /storm.get_size());  // The total damage percentange inflicted by the hurricane (A linear function of catagory and location relative to hurricane)
	//std::cout << damage << std::endl;
	wildcard = population * distance;
	std::cout << wildcard << std::endl;

	if((damage) > 1){damage_perc = 0;}
	else if(damage < 1)
	{
		damage_perc = 1 - ((storm.get_catagory()/5) * damage);
	}

	//std::cout << damage_perc << std::endl;
	//std::cout << max_pop_rate << std::endl << std::endl;
	pop_rate_l = max_pop_rate * damage_perc;
}



void city::calc_perc_enterers(float total_wildcards)
{
	per_enterers = 1 - (wildcard/total_wildcards);
	std::cout << per_enterers << std::endl;
}

void city::calc_pop_rate(float total_leavers)
{
	float pop_rate_e;
	if(damage_perc >  0){pop_rate_e = 0;}
	else
	{
		 pop_rate_e= per_enterers * total_leavers;
		pop_rate = pop_rate_l - pop_rate_e;
	}
}


int city::get_population() const
{
	return population;
}

float city::get_lon()const
{
	return lon;
}	 

float city::get_lat()const
{
	return lat;

}

city::rel_income city::get_rel_income() const
{
	return wealth;

}

city::rel_popsize city::get_rel_popsize() const
{
	return population_type;
}

city::rel_seafloor city::get_rel_seafloor() const
{
	return sea_height;
}
void city::set_lon(float val)
{
	lon = val;
}

void city::set_lat(float val)
{
   lat = val;
}

 std::string city::get_name() const
 {
	 return name;
 }
     
 void city::set_name(std::string label)
 {
	 name = label;
 }
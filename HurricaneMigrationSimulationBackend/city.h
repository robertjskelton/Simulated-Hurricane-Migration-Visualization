#include <string>
#include "Hurricane.h"


class city
{
public:
	
	enum city_type{Coastal,Mainland};    // City Type
	/*enum rel_income{low, below_avg, avg, abv_avg, high, NA}; // Relative Income of a city
	enum rel_popsize{low, below_avg, avg, abv_avg, high, NA}; // Relative population of a city
	enum rel_seafloor{low, below_avg, avg, abv_avg, high, NA}; // Relative seafloor of all required cities*/


    enum rel_income{inc_NA, inc_low, inc_below_avg, inc_avg, inc_abv_avg, inc_high}; // Relative Income of a city
	enum rel_popsize{pop_NA, pop_low, pop_below_avg, pop_avg, pop_abv_avg, pop_high}; // Relative population of a city
	enum rel_seafloor{floor_low, floor_below_avg, floor_avg, floor_abv_avg, floor_high}; // Relative seafloor of all required cities

	city(float a, float b);
	city(float lati, float longi, std::string label,int pop, city_type type, rel_income income, rel_popsize pop_type,rel_seafloor height);
	city(float a, float b, std::string label, int pop);

	
	 void calc_pop_rate_l(hurricane storm);
	 void calc_pop_rate(float total_leavers);
	 void calc_max_pop_rate(bool timescale);
	 void calc_perc_enterers(float total_wildcards);
	 float get_wildcard();
	 float get_lon() const;
	 float get_lat() const ;
	 int get_population() const;
	 float get_pop_rate_l();
	 std::string get_name() const;
	 rel_popsize get_rel_popsize() const;
	 rel_income get_rel_income() const;
	 rel_seafloor get_rel_seafloor() const;
	 
     
	 void set_name(std::string label);
	 void set_lat(float val);
	 void set_lon(float val);
	 

	 float get_pop_rate();
	 

private:

	 city_type orien;
	 rel_income wealth;
	 rel_popsize population_type;
	 rel_seafloor sea_height;
	 std::string name;
	 int population;
     float max_pop_rate,pop_rate_l,pop_rate,lon,lat,per_enterers,wildcard;
	 float damage_perc;
	 //float calcdistance(float lat, float lon);
	 

};
#include "Hurricane.h"

hurricane::hurricane(float a, float b)
{

	lat = a;
	lon = b;

}

hurricane::hurricane(float lata, float lona, float radius, catagory cata)
{
	lat = lata;
	lon = lona;
	size = radius;
    intensity = cata;
}

float hurricane::get_lon() const
{
	return lon;
}	 

float hurricane::get_lat() const 
{
	return lat;

}

float hurricane::get_size() const
{
	return size;
}

hurricane::catagory hurricane::get_catagory() const
{
	return intensity;
}
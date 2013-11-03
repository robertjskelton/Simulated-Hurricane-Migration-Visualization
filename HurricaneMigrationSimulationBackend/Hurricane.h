


class hurricane
{

public:
	enum catagory{cat1=1,cat2,cat3,cat4,cat5};
	enum size_{small,medium,large};
	hurricane();
	hurricane(float a, float b);
	hurricane(float lata, float lona, float radius , catagory cata);
	
	float get_size() const;
	catagory get_catagory() const;
	float get_lat() const;
	float get_lon() const;

private:
	
	float lat,lon;
	float size; //
	catagory intensity;

	
};
	
	

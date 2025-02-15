const locations = {
  provinces: [
    {
      name: 'Andhra Pradesh',
      districts: [
        {
          name: 'Visakhapatnam',
          cities: ['Visakhapatnam', 'Anakapalle', 'Bheemili']
        },
        {
          name: 'Vijayawada',
          cities: ['Vijayawada', 'Nuzvid', 'Machilipatnam']
        }
      ]
    },
    {
      name: 'Arunachal Pradesh',
      districts: [
        {
          name: 'Itanagar',
          cities: ['Itanagar', 'Naharlagun', 'Ziro']
        }
      ]
    },
    {
      name: 'Assam',
      districts: [
        {
          name: 'Guwahati',
          cities: ['Guwahati', 'Tezpur', 'Dibrugarh']
        }
      ]
    },
    {
      name: 'Bihar',
      districts: [
        {
          name: 'Patna',
          cities: ['Patna', 'Gaya', 'Bhagalpur']
        }
      ]
    },
    {
      name: 'Chhattisgarh',
      districts: [
        {
          name: 'Raipur',
          cities: ['Raipur', 'Bhilai', 'Durg']
        }
      ]
    },
    {
      name: 'Goa',
      districts: [
        {
          name: 'North Goa',
          cities: ['Panaji', 'Mapusa', 'Calangute']
        }
      ]
    },
    {
      name: 'Gujarat',
      districts: [
        {
          name: 'Ahmedabad',
          cities: ['Ahmedabad', 'Gandhinagar', 'Surat']
        }
      ]
    },
    {
      name: 'Haryana',
      districts: [
        {
          name: 'Gurugram',
          cities: ['Gurugram', 'Faridabad', 'Panipat']
        }
      ]
    },
    {
      name: 'Himachal Pradesh',
      districts: [
        {
          name: 'Shimla',
          cities: ['Shimla', 'Manali', 'Dharamshala']
        }
      ]
    },
    {
      name: 'Jharkhand',
      districts: [
        {
          name: 'Ranchi',
          cities: ['Ranchi', 'Jamshedpur', 'Dhanbad']
        }
      ]
    },
    {
      name: 'Karnataka',
      districts: [
        {
          name: 'Bangalore',
          cities: ['Bangalore', 'Mysore', 'Mangalore']
        }
      ]
    },
    {
      name: 'Kerala',
      districts: [
        {
          name: 'Thiruvananthapuram',
          cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode']
        }
      ]
    },
    {
      name: 'Madhya Pradesh',
      districts: [
        {
          name: 'Bhopal',
          cities: ['Bhopal', 'Indore', 'Gwalior']
        }
      ]
    },
    {
      name: 'Maharashtra',
      districts: [
        {
          name: 'Mumbai',
          cities: ['Mumbai', 'Pune', 'Nagpur']
        }
      ]
    },
    {
      name: 'Manipur',
      districts: [
        {
          name: 'Imphal',
          cities: ['Imphal', 'Thoubal', 'Churachandpur']
        }
      ]
    },
    {
      name: 'Meghalaya',
      districts: [
        {
          name: 'Shillong',
          cities: ['Shillong', 'Tura', 'Jowai']
        }
      ]
    },
    {
      name: 'Mizoram',
      districts: [
        {
          name: 'Aizawl',
          cities: ['Aizawl', 'Lunglei', 'Champhai']
        }
      ]
    },
    {
      name: 'Nagaland',
      districts: [
        {
          name: 'Kohima',
          cities: ['Kohima', 'Dimapur', 'Mokokchung']
        }
      ]
    },
    {
      name: 'Odisha',
      districts: [
        {
          name: 'Bhubaneswar',
          cities: ['Bhubaneswar', 'Cuttack', 'Puri']
        }
      ]
    },
    {
      name: 'Punjab',
      districts: [
        {
          name: 'Amritsar',
          cities: ['Amritsar', 'Ludhiana', 'Jalandhar']
        }
      ]
    },
    {
      name: 'Rajasthan',
      districts: [
        {
          name: 'Jaipur',
          cities: ['Jaipur', 'Jodhpur', 'Udaipur']
        }
      ]
    },
    {
      name: 'Tamil Nadu',
      districts: [
        {
          name: 'Chennai',
          cities: ['Chennai', 'Coimbatore', 'Madurai']
        }
      ]
    },
    {
      name: 'Telangana',
      districts: [
        {
          name: 'Hyderabad',
          cities: ['Hyderabad', 'Warangal', 'Nizamabad']
        }
      ]
    },
    {
      name: 'Uttar Pradesh',
      districts: [
        {
          name: 'Lucknow',
          cities: ['Lucknow', 'Varanasi', 'Kanpur']
        }
      ]
    },
    {
      name: 'Uttarakhand',
      districts: [
        {
          name: 'Dehradun',
          cities: ['Dehradun', 'Haridwar', 'Nainital']
        }
      ]
    },
    {
      name: 'West Bengal',
      districts: [
        {
          name: 'Kolkata',
          cities: ['Kolkata', 'Howrah', 'Durgapur']
        }
      ]
    },
  ],
};

const allCities = locations.provinces.flatMap((province) =>
  province.districts.flatMap((district) => district.cities)
);

export { locations, allCities };

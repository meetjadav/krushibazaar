import importImages from "@/utils/importImages";

const images = importImages(require.context("@/public/MarketImages"));

const marketData = {
    wheat: {
        name: 'Wheat',
        smallInfo: "Feel the wrath of the wheat",
        description: 'Wheat is one of the most important staple crops worldwide, known for its versatility and nutritional value. It is rich in fiber, protein, and essential vitamins and minerals. Wheat can be processed into flour, which is used to make bread, pasta, and many other food products.',
        farmerRecommendation: 'Farmers recommend planting wheat in well-drained soil with moderate rainfall. Crop rotation and the use of resistant varieties are crucial to prevent diseases. Proper fertilization and timely irrigation can significantly enhance yield and quality.',
        image: images['./wheat.jpg'],
        price: 0.2,
        unit: 'kg'
    },
    rice: {
        name: 'Rice',
        smallInfo: "Life feels good with a bowl of rice",
        description: 'Rice is a staple food for more than half of the world\'s population. It is a good source of energy, providing complex carbohydrates, and is low in fat. There are various types of rice, including white, brown, basmati, and jasmine, each with unique flavors and nutritional profiles.',
        farmerRecommendation: 'For optimal growth, farmers should cultivate rice in fields with adequate water supply, typically through flooding. Using high-quality seeds and following proper planting techniques can improve yield. Integrated pest management and balanced fertilization are also essential for a healthy crop.',
        image: images['./rice.jpg'],
        price: 0.3,
        unit: 'kg'
    },
    pearlmillet: {
        name: 'Pearl Millet',
        smallInfo: "Good and Premium Quality",
        description: 'Pearl millet, also known as bajra, is a highly nutritious and drought-resistant grain. It is rich in protein, fiber, and essential minerals like iron and magnesium. Pearl millet is often used to make flatbreads, porridges, and other traditional dishes in many parts of the world.',
        farmerRecommendation: 'Pearl millet thrives in arid and semi-arid regions. Farmers should plant it in sandy or loamy soils with good drainage. It is important to use improved seed varieties and follow appropriate sowing methods. Regular weeding and pest control measures are necessary for optimal yields.',
        image: images['./pearlmillet.jpg'],
        price: 0.5,
        unit: 'kg'
    },
    oats: {
        name: 'Oats',
        smallInfo: "Oat is GOAT",
        description: 'Oats are a highly nutritious grain known for their high fiber content, particularly beta-glucan, which is beneficial for heart health. They are also a good source of protein, vitamins, and antioxidants. Oats are commonly used in breakfast cereals, baked goods, and as a thickening agent in soups and stews.',
        farmerRecommendation: 'Oats grow best in cool, moist climates. Farmers should plant them in well-drained, fertile soils. Using certified seeds and following proper crop rotation practices can help prevent diseases. Adequate fertilization and timely harvesting are key to achieving high-quality oats.',
        image: images['./oats.jpg'],
        price: 0.5,
        unit: 'kg'
    },
    chickpeas: {
        name: 'Chickpeas',
        smallInfo: "Delicious and healthy",
        description: 'Chickpeas, also known as chana or garbanzo beans, are a popular legume rich in protein, fiber, and essential vitamins and minerals. They are widely used in various cuisines, from hummus and salads to stews and curries. Chickpeas have a nutty flavor and a firm texture.',
        farmerRecommendation: 'Chickpeas prefer well-drained loamy or sandy soils. Farmers should inoculate seeds with rhizobium bacteria to enhance nitrogen fixation. Regular irrigation during flowering and pod formation stages is crucial. Crop rotation and pest management practices help in maintaining soil health and reducing disease incidence.',
        image: images['./chickpeas.jpg'],
        price: 0.8,
        unit: 'kg'
    },
    mungbeans: {
        name: 'Mung Beans',
        smallInfo: "Mung Beans for Good Health",
        description: 'Mung beans are a nutritious legume known for their high protein and fiber content. They are also rich in vitamins and minerals, including folate, magnesium, and vitamin B6. Mung beans are commonly used in soups, salads, and desserts, and can be sprouted for additional nutritional benefits.',
        farmerRecommendation: 'Mung beans grow well in warm climates with moderate rainfall. Farmers should plant them in well-drained soils with good fertility. Proper spacing and timely weeding are important to prevent competition from weeds. Pest and disease management is also crucial for ensuring a healthy crop.',
        image: images['./mungbeans.jpg'],
        price: 0.4,
        unit: 'kg'
    },
    greenpeas: {
        name: 'Green Peas',
        smallInfo: "Feel the Green, Feel the Peas",
        description: 'Green peas are a popular vegetable known for their sweet flavor and nutritional value. They are rich in protein, fiber, vitamins A, C, and K, and various minerals. Green peas can be eaten fresh, frozen, or canned, and are often used in soups, stews, and side dishes.',
        farmerRecommendation: 'Green peas thrive in cool, well-drained soils with good organic matter. Farmers should plant them early in the season to avoid hot weather. Regular irrigation and proper spacing help in achieving good yields. Using disease-resistant varieties and implementing crop rotation can reduce the risk of pests and diseases.',
        image: images['./greenpeas.jpg'],
        price: 0.6,
        unit: 'kg'
    },
    tractors: {
        name: 'Tractors',
        smallInfo: "Essential for modern farming",
        description: 'Tractors are powerful vehicles designed for agricultural tasks such as plowing, tilling, planting, and hauling. They come in various sizes and specifications to suit different farming needs. Modern tractors are equipped with advanced features like GPS, auto-steer systems, and efficient engines.',
        farmerRecommendation: 'Farmers should choose tractors based on their farm size and specific needs. Regular maintenance, including oil changes, filter replacements, and tire checks, is crucial for ensuring long-term performance. Investing in attachments like plows, harrows, and seeders can enhance the tractor\'s versatility.',
        image: images['./tractors.jpg'],
        price: 25000,
        unit: 'unit'
    },
    combineharvesters: {
        name: 'Combine Harvesters',
        smallInfo: "Efficient harvesting solutions",
        description: 'Combine harvesters are machines designed to efficiently harvest a variety of grain crops. They combine three separate harvesting operations - reaping, threshing, and winnowing - into a single process. This reduces labor and increases productivity, making them essential for large-scale farming.',
        farmerRecommendation: 'Selecting the right combine harvester depends on the crop type and field size. Regular maintenance, including checking belts, chains, and blades, ensures optimal performance. Proper calibration and adjustment based on the crop conditions are necessary for effective harvesting.',
        image: images['./combineharvesters.jpg'],
        price: 100000,
        unit: 'unit'
    },
    fertilizers: {
        name: 'Fertilizers',
        smallInfo: "Boost your crop yield",
        description: 'Fertilizers are chemical or natural substances added to soil to supply essential nutrients required for plant growth. They help in improving soil fertility and enhancing crop yields. Common types of fertilizers include nitrogen, phosphorus, and potassium-based formulations.',
        farmerRecommendation: 'Farmers should conduct soil tests to determine nutrient deficiencies before applying fertilizers. Following recommended application rates and timings can prevent over-fertilization, which can harm the environment. Using organic fertilizers and practicing integrated nutrient management can improve soil health.',
        image: images['./fertilizers.jpg'],
        price: 25,
        unit: 'kg'
    },
    pesticides: {
        name: 'Pesticides',
        smallInfo: "Protect your crops from pests",
        description: 'Pesticides are substances used to prevent, destroy, or control pests that can damage crops. They include insecticides, herbicides, fungicides, and rodenticides. Proper use of pesticides can help in maintaining crop health and preventing significant yield losses.',
        farmerRecommendation: 'Farmers should identify the specific pests affecting their crops before selecting pesticides. Following the recommended dosage and application methods is crucial for effectiveness and safety. Integrated pest management practices, including crop rotation and biological controls, can reduce reliance on chemical pesticides.',
        image: images['./pesticides.jpg'],
        price: 30,
        unit: 'liter'
    }
};

export default marketData;

export default function Menu() {
    return (
        <section id="menu" className="px-6 py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <img src={`src/assets/menu.jpeg`} alt="menu" className="w-full object-cover rounded-md mb-4" />
                    {/* <h3 className="text-xl font-semibold">{item}</h3>
                    <p className="text-brown-600 mt-2">$3.50</p> */}
                </div>
            <div className="grid md:grid-cols-3 gap-6">
                
            {/* {["Espresso", "Latte", "Croissant"].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <img src={`/images/${item.toLowerCase()}.jpg`} alt={item} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="text-brown-600 mt-2">$3.50</p>
                </div>
            ))} */}
            </div>
        </section>
    );
}
"use client";
import { useEffect, useState } from 'react';
import NavbarComponent from '@/components/Navbar/Navbar';
import FooterComponent from '@/components/Footer/Footer';
import "@/app/pages/homepage/itemsbought/page.css";
import marketData from '@/data/marketData';
import Image from 'next/image';

const Page = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPurchasedItems = async () => {
            try {
                const response = await fetch('/api/itemsboughtbackend');
                if (!response.ok) {
                    throw new Error('Failed to fetch purchased items');
                }
                const data = await response.json();
                console.log('Fetched data:', data);
                setItems(data.purchasedItems);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPurchasedItems();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='main-itemsbought-container'>
            <NavbarComponent />

            <h1 className='title'>Purchased Items</h1>
            {items.length === 0 ? (
                <p className="no-purchase">You haven&apos;t purchased anything yet</p>
            ) : (
                <ul className="items">
                    {items.map((item) => {
                        const marketItem = marketData[item.item_name.toLowerCase().replace(/ /g, '')];
                        return (
                            <li className="item" key={item.item_name}>
                                {marketItem && (
                                    <Image
                                        className='item-image'
                                        src={marketItem.image}
                                        alt={item.item_name}
                                        width={300}
                                        height={200}
                                    />
                                )}
                                <p className='item-name'>{item.item_name}</p>
                                <p>{item.total_quantity} items</p>
                                <p className='item-price'>${(item.total_quantity * item.price).toFixed(2)}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
            <FooterComponent />
        </div>
    );
};

export default Page;

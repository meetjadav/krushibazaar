
"use client"
import { useEffect, useState } from 'react';
import NavbarComponent from '@/components/Navbar';
import FooterComponent from '@/components/Footer';
import "@/app/pages/homepage/itemsbought/page.css";
import LoadigComponent from "@/components/Loading";
const Page = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPurchasedItems = async () => {
            try {
                const response = await fetch('/api/itemsboughtbackend');
                if (!response.ok) {
                    throw new Error('Failed to fetch purchased items');
                }
                const data = await response.json();
                setItems(data.purchasedItems);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPurchasedItems();
    }, []);

    if (loading) {
        return <div className='main-itemsbought-container'>
            <NavbarComponent /><LoadigComponent />
            <FooterComponent /></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='main-itemsbought-container'>
            <NavbarComponent />
            <h1 className='title'>Purchased Items</h1>
            {items.length === 0 ? (
                <p className="no-purchase">You haven&apos;t purchased yet</p>
            ) : (
                <ul className="items">
                    {items.map((item) => (
                        <li key={item.item_name}>
                            <p>Item Name: {item.item_name}</p>
                            <p>Total Quantity: {item.total_quantity}</p>
                            <p>Total Price: ${item.total_quantity * item.price}</p>
                        </li>
                    ))}
                </ul>
            )}

            <FooterComponent />
        </div>
    );
};

export default Page;

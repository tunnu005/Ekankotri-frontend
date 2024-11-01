import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postupload } from '@/states/action-creators';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AdminPanel = () => {
    const [email, setEmail] = useState('');
    const [selectImage, setSelectImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false); // State for loading indicator
    const notify = (message) => toast(message);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const uploadTemplates = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!title || !type || !selectImage) {
            notify("Please fill in all fields");
            return;
        }

        setLoading(true); // Set loading to true when upload starts

        const data = new FormData();
        data.append("file", selectImage);
        data.append("title", title);
        data.append("type", type);

        try {
            const resp = await postupload(data);
            notify(resp.status === 201 ? "Upload successful" : resp.data.message);
        } catch (error) {
            notify("Upload failed");
            console.error(error);
        } finally {
            setLoading(false); // Reset loading state after upload
            setTitle("");
            setType("");
            setSelectImage(null);
            setImagePreview(null);
        }
    };

    const handleUpgradeSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!email) {
            notify("Please enter an email");
            return;
        }

        console.log("Upgrading user:", email);
        // Implement the logic to upgrade the user by email to admin
        notify(`User ${email} upgraded to admin.`);
        setEmail(""); // Clear the email field after submission
    };

    return (
        <div className='h-screen w-screen flex justify-center items-center gap-4'>
            <ToastContainer />
            {/* Upgrade Admin Card */}
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Upgrade Admin</CardTitle>
                    <CardDescription>Change permission of user</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleUpgradeSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email"
                                />
                            </div>
                        </div>
                        <Button type="submit" className="mt-4">Upgrade</Button>
                    </form>
                </CardContent>
            </Card>

            {/* Upload Card Image Card */}
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Upload Picture of Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={uploadTemplates}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="cardName">Name of Card</Label>
                                <Input
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    type="text"
                                    id="cardName"
                                    placeholder="Enter Card's Name"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="type" className="block">
                                    <select
                                        id="type"
                                        className="ml-0  bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-offset-gray-900 focus:border-gray-900"
                                        onChange={(e) => setType(e.target.value)}
                                        value={type}
                                    >
                                        <option value="">Select card type</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Graduation">Graduation</option>
                                        <option value="Holiday">Holiday</option>
                                    </select>
                                </label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="photo">Card's Image</Label>
                                <Input
                                    onChange={handleImageChange}
                                    type='file'
                                    id='photo'
                                    accept="image/*"
                                />
                                {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 h-32 object-cover rounded" />}
                            </div>
                        </div>
                        <Button type="submit" className="mt-4" disabled={loading}>
                            {loading ? 'Uploading...' : 'Upload'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminPanel;

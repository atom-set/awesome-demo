import { useState, useEffect } from "react";
import { supabase } from "./lib/api";
import Auth from "./components/Auth";
import Home from "./components/Home";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        init();
        const session = supabase.auth.session();
        console.log("session:", session);
        setUser(session?.user ?? null);

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                const currentUser = session?.user;
                setUser(currentUser ?? null);
            }
        );

        return () => {
            authListener?.unsubscribe();
        };
    }, [user]);

    const init = async () => {
        let { data: demo, error } = await supabase.from("todos").select("*");

        console.log(demo, error);
    };

    return (
        <div className="min-w-full min-h-screen flex items-center justify-center bg-gray-200">
            {!user ? <Auth /> : <Home user={user} />}
        </div>
    );
}

export default App;

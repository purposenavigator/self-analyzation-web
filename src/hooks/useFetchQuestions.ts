import { getData } from "@/lib/api";
import { useEffect, useState } from "react";

const useFetchQuestions = () => {   
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        setLoading(true);
        getData('/questions')
        .then((response: any) => {
            setQuestions(response);
            setLoading(false);
            return response
        })
        .catch((error) => {
            alert(error)
            setError(error.message);
            setLoading(false);
        });
    }, []);
    
    return { questions, loading, error };
};
    
    export default useFetchQuestions
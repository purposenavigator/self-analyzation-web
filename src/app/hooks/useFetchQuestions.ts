import { useEffect, useState } from "react";

const initQuestions: Question[] = [{
    id: 1,
    title: 'Question 1',
    explanation: 'Explanation 1'
}, {
    id: 2,
    title: 'Question 2',
    explanation: 'Explanation 2'
}, {
    id: 3,
    title: 'Question 3',
    explanation: 'Explanation 3'
}, {
    id: 4,
    title: 'Question 4',
    explanation: 'Explanation 4'
}]

const useFetchQuestions = () => {   
    const [questions, setQuestions] = useState<Question[]>(initQuestions);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    /*useEffect(() => {
        setLoading(true);
        fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => response.json())
        .then((data) => {
            setQuestions(data.results);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, []);*/
    
    return { questions, loading, error };
    };
    
    export default useFetchQuestions
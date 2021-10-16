import {News} from "../../interfaces/News";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../store";
import {notify} from "./notifySlice";
import NewsService from '../../services/NewsService';
import {getErrorMsg} from "../../utils/HelperFunc";

interface InitialNewsState {
    news: News[],
    loading: boolean;
}

const initialState: InitialNewsState = {
    news: [],
    loading: false
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNewsLoading: state => {
            state.loading = true;
        },
        setNews: (state, action: PayloadAction<{ news: News[] }>) => {
            state.news = action.payload.news;
            state.loading = false;
        }
    }}
)

export const { setNewsLoading, setNews } = newsSlice.actions

export const fetchNews = (): AppThunk => {
    return async dispatch => {
        try{
            dispatch(setNewsLoading())
            const news = await NewsService.getNews();
            dispatch(setNews({news: news}))
        }catch (e) {
            dispatch(notify(getErrorMsg(e), 'error'))
        }

    }
}

export const selectNewsState = (state: RootState) => state.news;

export default newsSlice.reducer;
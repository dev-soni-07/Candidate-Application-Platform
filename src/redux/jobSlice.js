import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (_, { getState }) => {
    const state = getState();
    const response = await fetch(`https://api.weekday.technology/adhoc/getSampleJdJSON`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            limit: 12,
            offset: state.jobs.items.length
        })
    });
    const data = await response.json();
    console.log("data.jdList:", data.jdList);
    return data.jdList;
});

export const jobSlice = createSlice({
    name: 'jobs',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                if (Array.isArray(action.payload)) {
                    state.items = [...state.items, ...action.payload];
                    state.status = 'idle';
                } else {
                    console.error('Payload is not an array:', action.payload);
                }
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default jobSlice.reducer;
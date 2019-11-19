import Favourite from '../models/favouriteCity';

const addToFavourites = (req, res) => {
    const favouriteCity = new Favourite({ 
        name: req.body.name
    });
    favouriteCity
        .save() 
        .then(city => res.status(201).json({ success: true, message: 'City was added successfully', city }))
        .catch(err => res.status(404).json({ success: false, message: 'City was not added', err}));
};

const deleteFromFavourites = (req, res) => {
    Favourite
        .findOneAndDelete({ _id: req.params.id })
        .then(() => res.json({ success: true, message: `City ${req.params.id} was deleted successfully` }))
        .catch(err => res.status(404).json({ success: false, message: 'Cannot find the city', err }));
};

const fetchFavourites = (req, res) => {
    Favourite
        .find()
        .then(cities => res.json(cities))
        .catch(err => res.status(500).json({ success: false, message: 'Cannot fetch cities', err }));
};

export default {
    addToFavourites,
    deleteFromFavourites,
    fetchFavourites
};
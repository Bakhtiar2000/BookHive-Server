const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.port || 5000;

// Middlewares
app.use(cors())
app.use(express.json())

// Mongodb
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nvsxjlv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

const dbConnect = async () => {
    try {
        const booksCollection = client.db('bookHive').collection('books')
        const usersCollection = client.db('bookHive').collection('users')
        const authorsCollection = client.db('bookHive').collection('authors')
        const publishersCollection = client.db('bookHive').collection('publishers')
        const reviewsCollection = client.db('bookHive').collection('reviews')

        // Books API
        app.get('/books', async (req, res) => {
            const result = await booksCollection.find().toArray()
            res.send(result)
        })

        app.get('/books/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await booksCollection.findOne(query)
            res.send(result)
        })

        app.post('/books', async (req, res) => {
            const result = await booksCollection.insertOne(req.body)
            res.send(result)
        })

        // Users API
        app.get('/users', async (req, res) => {
            const result = await usersCollection.find().toArray()
            res.send(result)
        })

        app.get('/users/:email', async (req, res) => {
            console.log(req.params.email)
            const query = { email: req.params.email }
            const result = await usersCollection.findOne(query)
            res.send(result)
        })

        app.post('/users', async (req, res) => {
            const user = req.body
            const query = { email: user.email }
            const existingUser = await usersCollection.findOne(query)
            if (existingUser) return res.send({ message: 'User already exists' })
            const result = await usersCollection.insertOne(user)
            res.send(result)
        })

        // Authors API
        app.get('/authors', async (req, res) => {
            const result = await authorsCollection.find().toArray()
            res.send(result)
        })

        // Publishers API
        app.get('/publishers', async (req, res) => {
            const result = await publishersCollection.find().toArray()
            res.send(result)
        })

        // Reviews API
        app.get('/reviews', async (req, res) => {
            const result = await reviewsCollection.find().toArray()
            res.send(result)
        })




        // await client.db("admin").command({ ping: 1 });
        client.connect()
        console.log("Database connected successfully");

    } catch (error) {
        console.log(error.name, error.message);
    }
}
dbConnect()

// API
app.get('/', (req, res) => {
    res.send("Server is running")
})
app.listen(port, () => {
    console.log(`Server is listening from port ${port}`);
})
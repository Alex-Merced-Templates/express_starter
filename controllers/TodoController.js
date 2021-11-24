// New Express Router
const router = require("express").Router();
const isUserLoggedIn = require("../utils/auth");

// Index Route "/todo", returns all todos for that user
router.get("/", isUserLoggedIn, async (req, res) => {
  try {
    const Todo = req.context.models.Todo;
    res.json(await Todo.find({ username: req.payload.username }));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Create Route "/todo", creates a new todo
router.post("/", isUserLoggedIn, async (req, res) => {
  try {
    const Todo = req.context.models.Todo;
    req.body.username = req.payload.username;
    res.json(await Todo.create(req.body));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// update Route "/todo/:id", updates a todo
router.put("/:id", isUserLoggedIn, async (req, res) => {
  try {
    const Todo = req.context.models.Todo;
    const id = req.params.id;
    res.json(await Todo.findByIdAndUpdate(id, req.body, { new: true }));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// destroy Route "/todo/:id", deletes a todo
router.delete("/:id", isUserLoggedIn, async (req, res) => {
  try {
    const Todo = req.context.models.Todo;
    const id = req.params.id;
    res.json(await Todo.findByIdAndRemove(id));
  } catch (error) {
    res.status(400).json({ error });
  }
});

//export router
module.exports = router;

<template>
  <div>
    <h1>Books with ISBN > 1000</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
        <button @click="openEditModal(book)">Update</button>
        <button @click="openDeleteModal(book.id)">Delete</button>
      </li>
    </ul>
    <h1>Books with ISBN > 1015</h1>
    <ul>
      <li v-for="book in filteredBooks" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
        <button @click="openEditModal(book)">Update</button>
        <button @click="openDeleteModal(book.id)">Delete</button>
      </li>
    </ul>

    <!-- Edit Modal -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeEditModal">&times;</span>
        <h2>Edit Book</h2>
        <label for="editName">Name:</label>
        <input type="text" v-model="editBook.name" id="editName" />
        <label for="editIsbn">ISBN:</label>
        <input type="text" v-model="editBook.isbn" id="editIsbn" />
        <button @click="updateBook">Save</button>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeDeleteModal">&times;</span>
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this book?</p>
        <button @click="deleteBook">Yes</button>
        <button @click="closeDeleteModal">No</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, orderBy, limit, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);
    const filteredBooks = ref([]);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const editBook = ref({ id: '', name: '', isbn: '' });
    const deleteBookId = ref('');

    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    const fetchFilteredBooks = async () => {
      try {
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 1015),
          orderBy('isbn', 'desc'),
          limit(5)
        );
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        filteredBooks.value = booksArray;
      } catch (error) {
        console.error('Error fetching filtered books: ', error);
      }
    };

    const openEditModal = (book) => {
      editBook.value = { ...book };
      showEditModal.value = true;
    };

    const closeEditModal = () => {
      showEditModal.value = false;
    };

    const updateBook = async () => {
      try {
        const bookRef = doc(db, 'books', editBook.value.id);
        await updateDoc(bookRef, {
          name: editBook.value.name,
          isbn: editBook.value.isbn
        });
        fetchBooks(); // Refresh the book list
        closeEditModal();
      } catch (error) {
        console.error('Error updating book: ', error);
      }
    };

    const openDeleteModal = (id) => {
      deleteBookId.value = id;
      showDeleteModal.value = true;
    };

    const closeDeleteModal = () => {
      showDeleteModal.value = false;
    };

    const deleteBook = async () => {
      try {
        const bookRef = doc(db, 'books', deleteBookId.value);
        await deleteDoc(bookRef);
        fetchBooks(); // Refresh the book list
        closeDeleteModal();
      } catch (error) {
        console.error('Error deleting book: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
      fetchFilteredBooks();
    });

    return {
      books,
      filteredBooks,
      showEditModal,
      showDeleteModal,
      editBook,
      deleteBookId,
      openEditModal,
      closeEditModal,
      updateBook,
      openDeleteModal,
      closeDeleteModal,
      deleteBook
    };
  }
};
</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
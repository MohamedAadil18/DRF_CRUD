from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer

# Create your views here.

class BookView(APIView):
    #to get values from the server
    def get(self, request, id=None):
        if id == None:
            books = Book.objects.all()
            serializer = BookSerializer(books, many=True)
            return Response({
                'message' : 'succesfully retrieved data',
                'books' : serializer.data
            })
        else:
            book = get_object_or_404(Book, pk = id)
            serializer = BookSerializer(book)
            return Response({
                'message' : 'succesfully retrieved a single data',
                'book' : serializer.data
            })

    #to post new values
    def post(self, request):
        serializer = BookSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'data addded successfully'})
        return Response({'message':'Error in posting data'})

    #to update an existing record
    def put(self, request, id):
        book = get_object_or_404(Book, pk = id)
        serializer = BookSerializer(book, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message' : 'Book has been updated successfully'})
    
    def delete(self, request, id):
        book = get_object_or_404(Book, pk = id)
        book.delete()
        return Response({'message' : 'Book has been deleted successfully'})

from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from ware.models import Product
from ware.serializers.products import LightProductSerializer, ProductSerializer


class ProductListAPI(ListAPIView):
    http_method_names = ["get"]
    queryset = Product.objects.all()
    permission_classes = [AllowAny]
    serializer_class = LightProductSerializer


class ProductRetrieveAPI(RetrieveAPIView):
    http_method_names = ["get"]
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    lookup_field = "id"
    lookup_url_kwargs = "id"

    def get_queryset(self):
        product_id = self.kwargs[self.lookup_field]

        return Product.objects.filter(id=product_id)

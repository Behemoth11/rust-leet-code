values = "5,8,7,0,5,7,1,9,0,7,4,1,9,5,0,7,8,2,9,2,4,8,7,5,8,7,5,4";
values_as_array = values.split(",");

values_as_array = list(map(lambda x: int(x), values_as_array))

values_as_array.sort()

print(values_as_array);
print(len(values_as_array));

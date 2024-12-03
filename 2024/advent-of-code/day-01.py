import unittest


def sum_input(input_file):
    with open(input_file, "r") as f:
        left, right = [], []
        for line in f:
            left.append(int(line.split()[0]))
            right.append(int(line.split()[1]))

        left, right = sorted(left), sorted(right)

        return sum(abs(x - y) for x, y in zip(left, right))


print("\nResult:", sum_input("day-01-input.txt"), "\n")


class TestAll(unittest.TestCase):
    def test_sum_distances(self):
        sum = sum_input("day-01-input-test.txt")
        self.assertEqual(sum, 11)

    def test_result(self):
        sum = sum_input("day-01-input.txt")
        self.assertEqual(sum, 2580760)


if __name__ == "__main__":
    unittest.main()

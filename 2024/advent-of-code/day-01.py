import unittest


def sum_input(input_file):
    with open(input_file, "r") as f:
        left, right = [], []
        for line in f:
            left.append(int(line.split()[0]))
            right.append(int(line.split()[1]))

        left, right = sorted(left), sorted(right)

        return sum(abs(x - y) for x, y in zip(left, right))


def similarity_score(input_file):
    with open(input_file, "r") as f:
        left, right = [], []
        for line in f:
            left.append(int(line.split()[0]))
            right.append(int(line.split()[1]))

        result = 0
        for x in left:
            result += x * right.count(x)

        return result


class TestAll(unittest.TestCase):
    def test_sum_distances(self):
        sum = sum_input("day-01-input-test.txt")
        self.assertEqual(sum, 11)

    def test_result(self):
        sum = sum_input("day-01-input.txt")
        self.assertEqual(sum, 2580760)

    def test_similarity_score(self):
        score = similarity_score("day-01-input-test.txt")
        self.assertEqual(score, 31)
    
    def test_similarity_score_result(self):
        score = similarity_score("day-01-input.txt")
        self.assertEqual(score, 25358365)


if __name__ == "__main__":
    unittest.main()
